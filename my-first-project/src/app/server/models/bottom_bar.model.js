const mongoose = require('mongoose');

const Bottom_Bar_Scehma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    collection_link: {
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
    // created_date:{
    //     type:Date,
    //     default:Date.now()
    // }
})
const bottom_bar = mongoose.model('bottom_bar', Bottom_Bar_Scehma);
module.exports = bottom_bar;