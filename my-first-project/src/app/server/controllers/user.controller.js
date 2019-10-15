const User = require('../models/user.model');
const Order = require('../models/order.model')


//==================================================== Customer ===========================================================


exports.createcustomer = function(req, res) {
    const cust = new User({
        first_name: req.body.data.first_name,
        last_name: req.body.data.last_name,
        email: req.body.data.email,
        phone_number: req.body.data.phone_number,
        image: req.body.data.image
    });

    cust.save().then(function(createdcust) {
            return res.status(200).json({
                status: 200,
                data: createdcust,
                message: 'customer created'
            });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}

exports.customerList = function(req, res) {
    User.find()
        .then(function(posts) {
            return res.status(200).json({
                status: 200,
                data: posts,
                message: 'User list found'
            })
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}


exports.getCustomer = function(req, res) {
    User.findById(req.params.id)
        .then(function(post) {
            return res.status(200).json({
                status: 200,
                data: post,
                message: "Success"
            });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}


exports.updateCustomer = function(req, res) {
    User.findById(req.params.id)
        .then(function(post) {
            post.first_name = req.body.data.first_name || post.first_name;
            post.last_name = req.body.data.last_name || post.last_name;
            post.email = req.body.data.email || post.email;
            post.phone_number = req.body.data.phone_number || post.phone_number;
            post.save()
                .then(function(updatedPost) {
                    return res.status(200).json({
                        status: 200,
                        data: updatedPost,
                        message: 'Success - customer updated!'
                    });
                })
                .catch(function(err) {
                    return res.status(400).json({
                        status: 400,
                        message: err.message
                    });
                });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}


exports.deleteCustomer = function(req, res) {
    User.findById(req.params.id)
        .then(function(post) {
            post.remove()
                .then(function(deletedPost) {
                    return res.status(200).json({
                        status: 200,
                        data: deletedPost,
                        message: 'Delete Successfully!'
                    });
                })
                .catch(function(err) {
                    return res.status(400).json({
                        status: 400,
                        message: err.message
                    });
                });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}

exports.deleteBulkCustomer = function(req, res) {
    user_ids = req.body.data.id
    var nameArr = user_ids.split(',');
    nameArr.forEach(element => {
        User.findById(element)
            .then(function(post) {
                post.remove()

            })
            .catch(function(err) {
                return res.status(400).json({
                    status: 400,
                    message: err.message
                });
            });
    });
    return res.status(200).json({
        status: 200,
        message: "delete Successfully!"
    });
}


//========================================================= Order ====================================================


exports.createOrder = function(req, res) {
    const order = new Order({
        order_id: req.body.data.order_id,
        customer_name: req.body.data.customer_name,
        customer_id: req.body.data.customer_id,
        //created_date : req.body.data.created_date
    });

    order.save().then(function(createorder) {
            return res.status(200).json({
                status: 200,
                data: createorder,
                message: 'success'
            });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}

exports.orderList = function(req, res) {
    Order.find()
        .then(function(posts) {
            return res.status(200).json({
                status: 200,
                data: posts,
                message: 'Success'
            })
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}


exports.getOrder = function(req, res) {
    Order.findById(req.params.id)
        .then(function(post) {
            return res.status(200).json({
                status: 200,
                data: post,
                message: "Success"
            });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}


exports.updateOrder = function(req, res) {
    Order.findById(req.params.id)
        .then(function(post) {
            post.order_id = req.body.data.order_id || post.order_id;
            post.customer_name = req.body.data.customer_name || post.customer_name;
            post.customer_id = req.body.data.customer_id || post.customer_id;
            post.save()
                .then(function(updatedPost) {
                    return res.status(200).json({
                        status: 200,
                        data: updatedPost,
                        message: 'Success'
                    });
                })
                .catch(function(err) {
                    return res.status(400).json({
                        status: 400,
                        message: err.message
                    });
                });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}


exports.deleteOrder = function(req, res) {
    Order.findById(req.params.id)
        .then(function(post) {
            post.remove()
                .then(function(deletedPost) {
                    return res.status(200).json({
                        status: 200,
                        data: deletedPost,
                        message: 'Delete Successfully!'
                    });
                })
                .catch(function(err) {
                    return res.status(400).json({
                        status: 400,
                        message: err.message
                    });
                });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}