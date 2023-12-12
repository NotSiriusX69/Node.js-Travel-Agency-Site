const mongoose = require('mongoose');
const Schema = mongoose.Schema; // constructor func

const airportSchema = new Schema({
    airport_name: {
        type: String,
        required: true
    },
    location_name: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Airport = mongoose.model('airport', airportSchema);

module.exports = Airport;
