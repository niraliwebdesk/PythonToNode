const mongoose = require('mongoose');

const top_banner_Scehma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    product_link: {
        type: String,
        required: false
    },
    product_rating: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    display_order: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    link_type: {
        type: String,
        required: false
    }
})
const top_banner = mongoose.model('top_banner', top_banner_Scehma);
module.exports = top_banner;