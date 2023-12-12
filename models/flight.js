const mongoose = require('mongoose');
const Schema = mongoose.Schema; // constructor func

const flightSchema = new Schema({
    flight_id: {
        type: Number,
        required: true
    },
    airline_id:{
        type: Number,
        required: true
    },
    from_date: {
        type: Date,
        required: true
    },
    to_date: {
        type: Date,
        required: true
    },
    from_airport: {
        type: String,
        required: true
    },
    to_airport: {
        type: String,
        required: true
    },
    hour_departure: {
        type: String,
        required: true
    },
    hour_arrival: {
        type: String,
        required: true
    },
    hour_departure_return: {
        type: String,
        required: true
    },
    hour_arrival_return: {
        type: String,
        required: true
    },
    from_location: {
        type: String,
        required: true
    },
    to_location: {
        type: String,
        required: true
    },
    ticket_price: {
        type: Number,
        required: true
    },
}, {timestamps: true});

const Flight = mongoose.model('flight', flightSchema);

module.exports = Flight;
