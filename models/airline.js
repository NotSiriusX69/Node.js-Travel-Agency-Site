const mongoose = require('mongoose');
const Schema = mongoose.Schema; // constructor func

const airlineSchema = new Schema({
    airline_id: {
        type: Number,
        required: true
    },
    airline_name: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Airline = mongoose.model('airline', airlineSchema);

module.exports = Airline;
