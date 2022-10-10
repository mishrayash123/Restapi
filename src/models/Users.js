const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: Number,
        required: true
    },
    birthmonth: {
        type: Number,
        required: true
    },
    birthyear: {
        type: Number,
        required: true
    },
    birthhour: {
        type: Number,
        required: true
    },
    birthmin: {
        type: Number,
        required: true
    },
    birthsecond: {
        type: Number,
        required: true
    },
    birthplace: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    partnerdetails: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const User = new mongoose.model('User', userSchema);

module.exports = User;
