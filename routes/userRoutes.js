const express = require('express');
const session = require('express-session');

const User = require('../models/user');
const Booking = require('../models/booking');

const router_user = express.Router();

const { generateUserId, generateBookingId } = require('../utilities');

router_user.use(express.urlencoded({ extended: true}));

router_user.use((req, res, next) => {
    res.locals.authenticated = req.session.authenticated || false;
    next();
});

router_user.get('/signup', (req, res ) =>{
    let authenticated = req.session.authenticated;
    if(authenticated){
        res.render('main', {authenticated});
    }else{
        res.render('signup');
    }
})
  
router_user.post('/signup', async (req, res) =>{
    const user = new User({
        user_id : generateUserId(),
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
    });

    // Declare again in this scope for query
    const email_for_validation = req.body.email; // for validation purposes
    const email_already_signed = await User.findOne({email_for_validation});

    if(email_already_signed){
        res.json({email_already_signed:true});
    }else{
        user.save()
        .then(() =>{
        req.session.authenticated = true;
        res.json({ redirect: '/' });
    })
    .catch((err) =>{
        console.log(err);
    });

    }
})

router_user.get('/login', (req, res) =>{
    let authenticated = req.session.authenticated;
    
    if(authenticated){
        res.render('main', {authenticated});
    }else{
        res.render('login');
    }
})

// Asynchrounous middleware to handle login credentials
router_user.post('/login', async (req, res ) =>{
    const user = {email: req.body.email, 
        password: req.body.password
    }

    const email_for_validation = req.body.email;
    const password_for_validation = req.body.password;

    console.log(user.email, user.password);

    try{
        const user_to_verify = await User.findOne({
            email: email_for_validation,
            password: password_for_validation
        });

        if(user_to_verify) {
            req.session.authenticated = true;
            req.session.user_id = user_to_verify.user_id;
            req.session.username = user_to_verify.username;
            req.session.email = user_to_verify.email;
            res.json({ redirect: '/' });
        }else{
            res.json({ invalid_credentials: true });
        }
    }catch (err){
        console.error('Error during login:', err);
        res.status(500).send('Internal Server Error');
    }
})

router_user.post('/account/update', async (req, res) => {   
    console.log(req.body);
    const user = {
        user_id: req.session.user_id, 
        username: req.body.username, 
        email: req.body.email, 
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    }

    const email_for_validation = req.body.email; // for validation purposes
    const email_already_signed = await User.findOne({email_for_validation});

    if(email_already_signed){
        res.json({email_already_signed:true});
    }else{
        User.findOneAndUpdate(
            { user_id: req.session.user_id },
            {
              username: req.body.username,
              email: req.body.email,
              firstname: req.body.firstname,
              lastname: req.body.lastname,
            },
            { new: true }
          )
        .then( () => {
            res.json({success:true, user});
        })
        .catch((err) =>{
            res.json({success:false});
            console.log(err);
        })
    }

});

router_user.post('/account/update/password', async (req, res) => {   
    console.log(req.body);

    const password_for_validation = req.body.password;

    const password_to_verify = await User.findOne(
        {
            password: password_for_validation
        }
    )

    if(password_to_verify){
        res.json({password_same:true});
    }else{
        User.findOneAndUpdate(
            {user_id: req.session.user_id},
            
            {password: req.body.password},
            
            {new: true}
        )
        .then( () => {
            res.json({success:true, password: req.body.password, user_id: req.session.user_id});
        })
        .catch((err) =>{
            res.json({success:false});
            console.log(err);
        })
    }
    

});

router_user.post('/account/bookings', async (req, res) => {
    const id = req.session.user_id;

    const booking = new Booking({
        booking_id: generateBookingId(),
        user_id: id,
        hotel_id: req.body.hotel_id,
        flight_id: req.body.flight_id,
        adults_nb: req.body.adults_nb,
        children_nb: req.body.children_nb,
        infants_nb: req.body.infants_nb,
        total_price: req.body.total_price
    })

    console.log(booking);

    booking.save()
        .then(() =>{
            res.json({success:true, redirect: '/account'});
        })
        .catch((err) =>{
            console.log(err);
        })
})

router_user.get('/logout', (req, res) => {
    try {
        req.session.isLoggedIn = false;

        req.session.destroy((err) => {
            if (err) {
                console.error('Error destroying session:', err);
                res.status(500).render('500', { title: '500' });
            } else {
                res.redirect('/');
            }
        });
    } catch (error) {
        console.error('Error during logout:', error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router_user;