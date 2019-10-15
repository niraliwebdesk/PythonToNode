const express = require('express');
const UserCtrl = require('../controllers/fcm.controller');
const router = express.Router();

router.post('/fcmDevice/add', UserCtrl.createFcm);
router.get('/fcmDevice', UserCtrl.Fcmlist);
router.get('/fcmDevice/:id', UserCtrl.getFCM);
router.put('/fcmDevice/update/:id', UserCtrl.updateFCM);
router.delete('/fcmDevice/delete/:id', UserCtrl.deleteFCM);


router.get('/notify/:id', UserCtrl.sendNotification);
router.get('/dataNotify/:id', UserCtrl.sendDataNotification);
router.put('/enable/:id', UserCtrl.changeActivation);
module.exports = router;