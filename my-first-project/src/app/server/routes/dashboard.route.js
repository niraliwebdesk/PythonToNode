const express = require('express');
const UserCtrl = require('../controllers/dashboard.controller');
const router = express.Router();

router.post('/bottomBanner/add', UserCtrl.createBottomBar);
router.get('/bottomBanner', UserCtrl.BottomBarlist);
router.get('/bottomBanner/:id', UserCtrl.getBottomBar);
router.put('/bottomBanner/update/:id', UserCtrl.updateBottomBar);
router.delete('/bottomBanner/delete/:id', UserCtrl.deleteBottomBar);

router.post('/MiddleBanner/add', UserCtrl.createMiddleBanner);
router.get('/MiddleBanner', UserCtrl.MiddleBannerList);
router.get('/MiddleBanner/:id', UserCtrl.getMiddleBanner);
router.put('/MiddleBanner/update/:id', UserCtrl.updateMiddleBanner);
router.delete('/MiddleBanner/delete/:id', UserCtrl.deleteMiddleBanner);

router.post('/Brand/add', UserCtrl.createBrand);
router.get('/Brand', UserCtrl.BrandList);
router.get('/Brand/:id', UserCtrl.getBrand);
router.put('/Brand/update/:id', UserCtrl.updateBrand);
router.delete('/Brand/delete/:id', UserCtrl.deleteBrand);

router.post('/TopBanner/add', UserCtrl.createTopBanner);
router.get('/TopBanner', UserCtrl.ToopBannerList);
router.get('/TopBanner/:id', UserCtrl.getTopBanner);
router.put('/TopBanner/update/:id', UserCtrl.updateTopBanner);
router.delete('/TopBanner/delete/:id', UserCtrl.deleteTopBanner);

module.exports = router;