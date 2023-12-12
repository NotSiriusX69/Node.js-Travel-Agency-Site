const express = require('express');
const session = require('express-session');

const User = require('../models/user');
const Flight = require('../models/flight');
const Booking = require('../models/booking');
const Hotel = require('../models/hotel');

const { returnImagePath } = require('../utilities');

const router_protected = express.Router();

router_protected.use(express.urlencoded({ extended: true}));

router_protected.use((req, res, next) => {
    res.locals.authenticated = req.session.authenticated || false;
    next();
});

router_protected.get('/bookFlight', authenticate, async (req, res ) =>{
    let isLoggedIn = req.session.authenticated;
    console.log('isFlights', isLoggedIn);

    const flights = await Flight.find({});

    flights.forEach((flight) =>{
        let flight_image_path = returnImagePath(flight.airline_id);
        flight["path"] = flight_image_path;
        console.log(flight["path"]);
    });
    
    res.render('flights', {isLoggedIn, flights});
  })
  
router_protected.post('/bookDetails', authenticate, async (req, res) => {
    let isLoggedIn = req.session.authenticated;
    const id = req.session.user_id;
    const booking_id = req.body.booking_id;

    Booking.findOne({ booking_id: booking_id })
        .then(booking => {
            if (booking) {
                Flight.findOne({ flight_id: booking.flight_id })
                    .then((flight) => {
                        if (flight) {
                            Hotel.find({location_name : flight.to_location})
                            .then((hotels) => {
                                res.render('book-details', { isLoggedIn, flight, booking , hotels});
                            })
                        } else {
                            console.log('Flight not found for the given booking');
                            res.status(404).send('Flight not found for the given booking');
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).send('Internal Server Error');
                    });
            } else {
                console.log('Booking not found');
                res.status(404).send('Booking not found');
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
});


router_protected.get('/account', authenticate, (req, res ) =>{
    let isLoggedIn = req.session.authenticated;

    const id = req.session.user_id;

    console.log('isLoggedIn', isLoggedIn);
    console.log('id', id);

    if(isLoggedIn){
        User.findOne({user_id : id})
        .then((user) => {
            Booking.find({user_id : id})
                .then((bookings) => {
                    Flight.find({flight_id : bookings.flight_id})
                        .then((flights) => {
                            res.render('account', {user, flights, bookings});
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                })
                .catch((err) => {
                    console.log()
                })
        })
        .catch((err) => {
            console.error(err);
        })
    }else{
        res.render('account', {isLoggedIn});
    }
})


function authenticate(req, res, next) {
    if (req.session && req.session.authenticated) {
        // User is authenticated, continue to the next middleware or route handler
        next();
    } else {
        // User is not authenticated, redirect to the login page
        res.redirect('/login');
    }
}

module.exports = router_protected;