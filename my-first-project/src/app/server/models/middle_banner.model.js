const mongoose = require('mongoose');

const Middle_Banner_Scehma = new mongoose.Schema({
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
    },
    path:{
        type: String,
        required:false
    }
})
const middle_banner = mongoose.model('middle_banner', Middle_Banner_Scehma);
module.exports = middle_banner;
