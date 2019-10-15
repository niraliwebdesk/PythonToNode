const mongoose = require('mongoose');

const login_schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: Boolean,
        required: true
    }
})
const login = mongoose.model('login', login_schema);
module.exports = login;