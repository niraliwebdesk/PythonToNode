const mongoose = require('mongoose');

const Brand_Scehma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand_link: {
        type: String,
        required: false
    },
    // image: {
    //     type: String,
    //     required: false
    // },
    display_order: {
        type: String,
        required: false
    },
       
    status: {
        type: String,
        required: false
    },
    imageid:{
        type: String,
        required:false
    }
})
const brand = mongoose.model('brand', Brand_Scehma);
module.exports = brand;
