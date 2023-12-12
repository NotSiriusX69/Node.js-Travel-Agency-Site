const express = require('express');
const session = require('express-session');

const User = require('../models/user');
const Flight = require('../models/flight');
const Hotel = require('../models/hotel');

const {parseStringToDate, returnImagePath} = require('../utilities');

const router_flight = express.Router();

router_flight.use(express.urlencoded({ extended: true}));

router_flight.use((req, res, next) => {
    res.locals.authenticated = req.session.authenticated || false;
    next();
});

router_flight.post('/bookFlight/filter', async (req, res) => {
    let isLoggedIn = req.session.authenticated;
    
    const searched_flight = {
        from_location: req.body.from_location,
        to_location: req.body.to_location,
        departure_date: req.body.from_date,
        return_date: req.body.to_date,
    }

    const searched_flight_from_date = parseStringToDate(searched_flight.departure_date);
    const searched_flight_to_date = parseStringToDate(searched_flight.return_date);

    const flights = await Flight.find({
        from_location: searched_flight.from_location,
        to_location: searched_flight.to_location,
        from_date: { $gte: searched_flight_from_date },
        to_date: { $lt: searched_flight_to_date },
    })

    flights.forEach((flight) =>{
        let flight_image_path = returnImagePath(flight.airline_id);
        flight["path"] = flight_image_path;
    });

    res.render('flights', {isLoggedIn, flights});
});

router_flight.get('/bookDetails/:id', async (req, res) =>{
    let isLoggedIn = req.session.authenticated;
    const id = req.params.id;

    console.log(id);

    Flight.findOne({flight_id : id})
    .then((flight) => {
        const fromDate = new Date(flight.from_date);
        const toDate = new Date(flight.to_date);
    
        console.log(flight);

        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        flight.from_date = fromDate.toLocaleDateString('en-US', options);
        flight.to_date = toDate.toLocaleDateString('en-US', options);

        Hotel.find({location_name : flight.to_location})
            .then((hotels) => {
                console.log(flight.to_location);
                console.log(hotels);
                res.render('book-details', {flight, hotels, isLoggedIn});
            })
            .catch((err) => {
                console.log(err);
            })
        })
        .catch((err) => {
            console.error(err);
        })
});

router_flight.post('/bookDetails/:id', async (req, res) =>{
    let isLoggedIn = req.session.authenticated;
    const id = req.params.id;

    Booking.findOne({ booking_id: id })
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


module.exports = router_flight;