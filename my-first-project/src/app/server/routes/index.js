const express = require('express');
const userRoutes = require('./user.route');
const dashboardRoutes = require('./dashboard.route');
const fcmRoutes = require('./fcm.route');

const router = express.Router();
router.get('/', function(req, res) {
    res.send('API works!');
});
router.use('/user', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/fcm', fcmRoutes);

module.exports = router;