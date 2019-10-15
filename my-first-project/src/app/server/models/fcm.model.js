const mongoose = require('mongoose');

const fcm_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    registration_token: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})
const fcm = mongoose.model('fcm', fcm_schema);
module.exports = fcm;