const FCM_model = require('../models/fcm.model');
const FCM = require('fcm-node');
let serverKey = "AAAAoIAynQI:APA91bFtG4bdFIcB82M4C0rC31GAXs5atktPgPGI7H141SqvvtMVDWXfOG5GeZzFduFNPNdD-i3nxv48uaNbo2fMcNVnWdoR2UX-R8MQKVTeH164cxuT4r0BGeGGbuL1GQuaOamo_gBD"
let fcm = new FCM(serverKey);

// ======================================= Bottom Banner ===============================================


exports.createFcm = function(req, res) {
    const cust = new FCM_model({
        name: req.body.data.name,
        isActive: req.body.data.isActive,
        user_name: req.body.data.user_name,
        registration_token: req.body.data.registration_token,
        type: req.body.data.type,

    });

    cust.save().then(function(createdcust) {
            return res.status(200).json({
                status: 200,
                data: createdcust,
                message: 'created'
            });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}

exports.Fcmlist = function(req, res) {
    FCM_model.find()
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


exports.getFCM = function(req, res) {
    FCM_model.findById(req.params.id)
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


exports.updateFCM = function(req, res) {
    FCM_model.findById(req.params.id)
        .then(function(post) {
            post.name = req.body.data.name || post.name;
            post.isActive = req.body.data.isActive || post.isActive;
            post.user_name = req.body.data.user_name || post.user_name;
            post.registration_token = req.body.data.registration_token || post.registration_token;
            post.type = req.body.data.type || post.type;
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


exports.deleteFCM = function(req, res) {
    FCM_model.findById(req.params.id)
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

function sendPushUsingFcm(registration_token) {
    const message = {
        // to: 'erw6nFQMyi0:APA91bG4xlqLSO0wAaKdTBf9v3-FXljVprWRFflyFdiw5PnMKBZlwBs8qcCEScX54U4xtSJvcbuza2FVBtt3fZqBsfoecUqI55uKcbnAOQ7yL5sqRdJKivoRtPECoHBiInkccI8E4NPx',
        to: registration_token,
        collapse_key: 'your_collapse_key',
        notification: {
            title: 'CA',
            body: 'Its a testing notification!'
        }
    }
    fcm.send(message, function(err, response) {
        if (err) {
            console.log("Something has gone wrong!", err);
        } else {
            console.log("Successfully sent with response: ", response);
            return response;
        }
    });
}

function sendDataNotiUsingFcm(registration_token) {
    const message = {
        // to: 'erw6nFQMyi0:APA91bG4xlqLSO0wAaKdTBf9v3-FXljVprWRFflyFdiw5PnMKBZlwBs8qcCEScX54U4xtSJvcbuza2FVBtt3fZqBsfoecUqI55uKcbnAOQ7yL5sqRdJKivoRtPECoHBiInkccI8E4NPx',
        to: registration_token,
        collapse_key: 'your_collapse_key',
        notification: {
            title: "Test Data Notification",
            body: "CA - Testing data Notification"
        },
        data: {
            notification_type: "Test_notification",
            title: "Test Data Notification",
            notification_message: "CA - Testing data Notification"
        },
    }
    fcm.send(message, function(err, response) {
        if (err) {
            console.log("Something has gone wrong!", err);
        } else {
            console.log("Successfully sent with response: ", response);
            return response;
        }
    });
}

exports.sendNotification = function(req, res) {
    FCM_model.findById(req.params.id)
        .then(function(post) {
            console.log("registration token :: ", post.registration_token)
            const re = sendPushUsingFcm(post.registration_token)
            return res.status(200).json({
                status: 200,
                message: "Success",
                response_message: re
            });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}
exports.sendDataNotification = function(req, res) {
    FCM_model.findById(req.params.id)
        .then(function(post) {
            console.log("registration token :: ", post.registration_token)
            const re = sendPushUsingFcm(post.registration_token)
            return res.status(200).json({
                status: 200,
                message: "Success",
                response_message: re
            });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}

exports.changeActivation = function(req, res) {
    FCM_model.findById(req.params.id)
        .then(function(post) {
            const activation_status = post.isActive
            post.isActive = req.body.data.isActive;
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