const mongoose = require('mongoose');

const OrderScehma = new mongoose.Schema({
    order_id:{
        type:String,
        required:true
    },
    customer_name:{
        type:String,
        required:false
    },
    customer_id:{
        type:String,
        required:false
    },
    // created_date:{
    //     type:Date,
    //     default:Date.now()
    // }
})
const Order = mongoose.model('Order', OrderScehma);
module.exports = Order;