const express = require('express');
const UserCtrl = require('../controllers/dashboard.controller');
const router = express.Router();
var multer = require('multer'); 
const path = require('path');
const BottomBar = require('../models/bottom_bar.model');
const UploadImage = require('../models/upload_image')
//var fs = require(‘fs’);

const bottom_storage=multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/BottomBanner/')
    },
    filename:function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        console.log("hello my image is",cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)));
    }
});

const bottom_upload = multer({
    storage:bottom_storage
})


 

router.post('/bottomBanner/add' , UserCtrl.createBottomBar);
router.post('/bottomBanner/add/image', bottom_upload.single('image'), function(req,res) {
    
    
    console.log(req.file);
    pathss = req.file.path
    fileNames = req.file.filename
    filetype = req.file.mimetype
    console.log("path is", pathss)
    console.log("filename is", fileNames)
    console.log('storage location is ', req.hostname + '/' + req.file.path);
    //return res.send(req.file);
    const  image = new UploadImage();
        image.imagePath = pathss;
        image.imageType = filetype;
        image.fileName =  fileNames;
        console.log("bottom save")
        image.save().then(data => {
            console.log("data is",data._id)
            const imageid = data._id
            return res.send({"id":imageid, "path":pathss})
        }).catch(e => {
        return res.send(e);
    })
    //image.save();
    //return res.send(req.file);
    //return res.send(req.file);
});
router.post('/bottomBanner/add', UserCtrl.createBottomBar);
router.get('/bottomBanner', UserCtrl.BottomBarlist);
router.get('/bottomBanner/:id', UserCtrl.getBottomBar);
router.put('/bottomBanner/update/:id', UserCtrl.updateBottomBar);
router.delete('/bottomBanner/delete/:id', UserCtrl.deleteBottomBar);

// router.post('/Upload_Image',upload.single('file'), UserCtrl.uploadimage)
const upload_storage=multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/BottomBanner/')
    },
    filename:function(req, file, cb){
        imgrul = file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        console.log("image url is", imgrul)
        cb(null, imgrul)
        console.log("hello my image is",cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)));
    }
});

const upload = multer({
    storage:upload_storage
})
router.post('/Upload_Image',upload.single('image'), function(req,res) {
    console.log(req.file);
    pathss = req.file.path
    fileNames = req.file.filename
    filetype = req.file.mimetype
    console.log("path is", pathss)
    console.log("filename is", fileNames)
    console.log('storage location is ', req.hostname +'/' + req.file.path);
    //return res.send(req.file);
    const  image = new UploadImage();
        image.imageName.data = pathss;
        image.imageName.contentType = filetype;
        image.imageName.fileName =  fileNames;
    //console.log("image save is");
    image.save().then(data => {
        console.log("data is",data._id)
        return res.send({"path":pathss});
    }).catch(e => {
        return res.send(e);
    })
    //console.log("return id is", image.save())
    
});

const middle_storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/MiddleBanner/')
    },
    filename:function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        console.log("hello my image is",cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)));
    }
});

const middle_upload = multer({
    storage:middle_storage
})
router.post('/MiddleBanner/add', UserCtrl.createMiddleBanner);
router.post('/MiddleBanner/add/image', middle_upload.single('image'), function(req,res) {
    console.log(req.file);
    pathss = req.file.path
    fileNames = req.file.filename
    filetype = req.file.mimetype
    console.log("path is", pathss)
    console.log("filename is", fileNames)
    console.log('storage location is ', req.hostname + '/' + req.file.path);
    
    const  image = new UploadImage();
        image.imagePath = pathss;
        image.imageType = filetype;
        image.fileName =  fileNames;
        console.log("bottom save")
        image.save().then(data => {
            console.log("data is",data._id)
            const imageid = data._id
            return res.send({"id":imageid,
                              "path":pathss  })
        }).catch(e => {
        return res.send(e);
    })
});

router.get('/MiddleBanner', UserCtrl.MiddleBannerList);
router.get('/MiddleBanner/:id', UserCtrl.getMiddleBanner);
router.put('/MiddleBanner/update/:id', UserCtrl.updateMiddleBanner);
router.delete('/MiddleBanner/delete/:id', UserCtrl.deleteMiddleBanner);



const brand_storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/Brand/')
    },
    filename:function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        console.log("hello my image is",cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)));
    }
});

const brand_upload = multer({
    storage:brand_storage
})
router.post('/Brand/add', UserCtrl.createBrand);
router.post('/Brand/add/image',brand_upload.single('image'), function(req,res) {
    
    console.log(req.file);
    pathss = req.file.path
    fileNames = req.file.filename
    filetype = req.file.mimetype
    console.log("path is", pathss)
    console.log("filename is", fileNames)
    console.log('storage location is ', req.hostname + '/' + req.file.path);
    
    const  image = new UploadImage();
        image.imagePath = pathss;
        image.imageType = filetype;
        image.fileName =  fileNames;
        console.log("bottom save")
        image.save().then(data => {
            console.log("data is",data._id)
            const imageid = data._id
            return res.send({"id":imageid,
                            "path":pathss})
        }).catch(e => {
        return res.send(e);
    })
});
router.get('/Brand', UserCtrl.BrandList);
router.get('/Brand/:id', UserCtrl.getBrand);
router.put('/Brand/update/:id', UserCtrl.updateBrand);
router.delete('/Brand/delete/:id', UserCtrl.deleteBrand);


const top_storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/TopBanner/')
    },
    filename:function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        console.log("hello my image is",cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)));
    }
});

const top_upload = multer({
    storage:top_storage
})
router.post('/TopBanner/add', UserCtrl.createTopBanner);
router.post('/TopBanner/add/image', top_upload.single('image'), function(req,res) {
    
    console.log(req.file);
    pathss = req.file.path
    fileNames = req.file.filename
    filetype = req.file.mimetype
    console.log("path is", pathss)
    console.log("filename is", fileNames)
    console.log('storage location is ', req.hostname + '/' + req.file.path);
    
    const  image = new UploadImage();
        image.imagePath = pathss;
        image.imageType = filetype;
        image.fileName =  fileNames;
        console.log("bottom save")
        image.save().then(data => {
            console.log("data is",data._id)
            const imageid = data._id
            return res.send({"id":imageid,"path":pathss})
        }).catch(e => {
        return res.send(e);
    })
});
router.get('/TopBanner', UserCtrl.ToopBannerList);
router.get('/TopBanner/:id', UserCtrl.getTopBanner);
router.put('/TopBanner/update/:id', UserCtrl.updateTopBanner);
router.delete('/TopBanner/delete/:id', UserCtrl.deleteTopBanner);

module.exports = router;
