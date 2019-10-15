const express = require('express');
const UserCtrl = require('../controllers/user.controller');
const router = express.Router();

router.post('/customer/add', UserCtrl.createcustomer);
router.post('/customer/delete', UserCtrl.deleteBulkCustomer);
router.get('/customer', UserCtrl.customerList);
router.get('/customer/:id', UserCtrl.getCustomer);
router.put('/customer/update/:id', UserCtrl.updateCustomer);
router.delete('/customer/delete/:id', UserCtrl.deleteCustomer);

router.post('/order/add', UserCtrl.createOrder);
router.get('/order', UserCtrl.orderList);
router.get('/order/:id', UserCtrl.getOrder);
router.put('/order/update/:id', UserCtrl.updateOrder);
router.delete('/order/delete/:id', UserCtrl.deleteOrder);

module.exports = router;