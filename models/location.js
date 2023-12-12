const mongoose = require('mongoose');
const Schema = mongoose.Schema; // constructor func

const locationSchema = new Schema({
    location_name: {
        type: String,
        required: true
    },
    country_name: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Location = mongoose.model('location', locationSchema);

module.exports = Location;
