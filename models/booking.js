const mongoose = require('mongoose');
const Schema = mongoose.Schema; // constructor func

const bookingSchema = new Schema({
    booking_id: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    hotel_name: {
        type: String,
    },
    flight_id: {
        type: Number,
        required: true
    },
    adults_nb: {
        type: Number,
        required: true
    },
    children_nb: {
        type: Number,
        required: true
    },
    infants_nb: {
        type: Number,
        required: true
    },
}, {timestamps: true});

const Booking = mongoose.model('booking', bookingSchema);

module.exports = Booking;
