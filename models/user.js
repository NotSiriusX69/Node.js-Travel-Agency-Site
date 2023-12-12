const mongoose = require('mongoose');
const Schema = mongoose.Schema; // constructor func

const userSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    firstname: String,
    lastname: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;
