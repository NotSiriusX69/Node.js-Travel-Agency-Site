const mongoose = require('mongoose');
const Schema = mongoose.Schema; // constructor func

const hotelSchema = new Schema({
    hotel_id: {
        type: Number,
        required: true
    },
    hotel_name: {
        type: String,
        required: true
    },
    hotel_stars: {
        type: Number,
        required: true
    },
    hotel_price_per_night: {
        type: Number,
        required: true
    },
    location_name: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Hotel = mongoose.model('hotel', hotelSchema);

module.exports = Hotel;
