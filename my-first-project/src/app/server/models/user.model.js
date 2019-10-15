const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
const Customer = mongoose.model('Customer', PostSchema);
module.exports = Customer;