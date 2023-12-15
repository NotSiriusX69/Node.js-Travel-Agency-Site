const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

// External Routes
const protectedRoutes = require('./routes/protectedRoutes');
const userRoutes = require('./routes/userRoutes');
const flightRoutes = require('./routes/flightRoutes');

const app = express();

const dbURI = '';
mongoose.connect(dbURI)
    .then((result) => {app.listen(3000) 
        console.log('connection established')}) // listen for req after connection is established
    .catch( (err) => console.log(err));


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

app.use(session({
  secret:'a-strong-key',
  resave:false,
  saveUninitialized: false,
  cookie: {
    path: '/',
    maxAge: 1000 * 24 * 60 * 60}
}))

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// Routes
app.use(protectedRoutes);
app.use(userRoutes);
app.use(flightRoutes);

app.get('/', (req, res) => {
  
  let isLoggedIn = req.session.authenticated;
  console.log('in main', isLoggedIn);
  res.render('main', {isLoggedIn});
});

app.get('/aboutus', (req, res) => {
  let isLoggedIn = req.session.authenticated;
  console.log('about us', isLoggedIn);
  res.render('aboutus', {isLoggedIn});
});

app.get('/contactus', (req, res ) =>{
  let isLoggedIn = req.session.authenticated;
  console.log('in contact us', isLoggedIn);
  res.render('contactus', {isLoggedIn});
})

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});