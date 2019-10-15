const BottomBar = require('../models/bottom_bar.model');
const MiddleBanner = require('../models/middle_banner.model');
const Brand = require('../models/brands.model');
const TopBanner = require('../models/top_banner.model');


// ======================================= Bottom Banner ===============================================


exports.createBottomBar = function(req, res) {
    const cust = new BottomBar({
        name: req.body.data.name,
        collection_link: req.body.data.collection_link,
        image: req.body.data.image,
        display_order: req.body.data.display_order,
        status: req.body.data.status,
        link_type: req.body.data.link_type,
    });

    cust.save().then(function(createdcust) {
            return res.status(200).json({
                status: 200,
                data: createdcust,
                message: 'Bottom banner created'
            });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}

exports.BottomBarlist = function(req, res) {
    BottomBar.find()
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


exports.getBottomBar = function(req, res) {
    BottomBar.findById(req.params.id)
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


exports.updateBottomBar = function(req, res) {
    BottomBar.findById(req.params.id)
        .then(function(post) {
            post.name = req.body.data.name || post.name;
            post.collection_link = req.body.data.collection_link || post.collection_link;
            post.image = req.body.data.image || post.image;
            post.display_order = req.body.data.display_order || post.display_order;
            post.status = req.body.data.status || post.status;
            post.link_type = req.body.data.link_type || post.link_type;
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


exports.deleteBottomBar = function(req, res) {
    BottomBar.findById(req.params.id)
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

// ==================================== Middle Banner ===================================================


exports.createMiddleBanner = function(req, res) {
    const cust = new MiddleBanner({
        name: req.body.data.name,
        brand_link: req.body.data.brand_link,
        image: req.body.data.image,
        display_order: req.body.data.display_order,
        status: req.body.data.status
    });

    cust.save().then(function(createdcust) {
            return res.status(200).json({
                status: 200,
                data: createdcust,
                message: 'Middle banner created'
            });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}

exports.MiddleBannerList = function(req, res) {
    MiddleBanner.find()
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

exports.getMiddleBanner = function(req, res) {
    MiddleBanner.findById(req.params.id)
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

exports.updateMiddleBanner = function(req, res) {
    MiddleBanner.findById(req.params.id)
        .then(function(post) {
            post.name = req.body.data.name || post.name;
            post.brand_link = req.body.data.brand_link || post.brand_link;
            post.image = req.body.data.image || post.image;
            post.display_order = req.body.data.display_order || post.display_order;
            post.status = req.body.data.status || post.status;
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

exports.deleteMiddleBanner = function(req, res) {
    MiddleBanner.findById(req.params.id)
        .then(function(post) {
            post.remove()
                .then(function(deletedPost) {
                    return res.status(200).json({
                        status: 200,
                        data: deletedPost,
                        message: 'Middle banner Delete Successfully!'
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

// ============================================ Brand ================================================ 



exports.createBrand = function(req, res) {
    const cust = new Brand({
        name: req.body.data.name,
        brand_link: req.body.data.brand_link,
        image: req.body.data.image,
        display_order: req.body.data.display_order,
        status: req.body.data.status
    });

    cust.save().then(function(createdcust) {
            return res.status(200).json({
                status: 200,
                data: createdcust,
                message: 'Brand created'
            });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}

exports.BrandList = function(req, res) {
    Brand.find()
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


exports.getBrand = function(req, res) {
    Brand.findById(req.params.id)
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

exports.updateBrand = function(req, res) {
    Brand.findById(req.params.id)
        .then(function(post) {
            post.name = req.body.data.name || post.name;
            post.brand_link = req.body.data.brand_link || post.brand_link;
            post.image = req.body.data.image || post.image;
            post.display_order = req.body.data.display_order || post.display_order;
            post.status = req.body.data.status || post.status;
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

exports.deleteBrand = function(req, res) {
    Brand.findById(req.params.id)
        .then(function(post) {
            post.remove()
                .then(function(deletedPost) {
                    return res.status(200).json({
                        status: 200,
                        data: deletedPost,
                        message: 'Brand Delete Successfully!'
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


//======================================= Top Banner ===========================================

exports.createTopBanner = function(req, res) {
    const cust = new TopBanner({
        name: req.body.data.name,
        product_link: req.body.data.product_link,
        product_rating: req.body.data.product_rating,
        image: req.body.data.image,
        display_order: req.body.data.display_order,
        status: req.body.data.status,
        link_type: req.body.data.link_type
    });

    cust.save().then(function(createdcust) {
            return res.status(200).json({
                status: 200,
                data: createdcust,
                message: 'top banner created'
            });
        })
        .catch(function(err) {
            return res.status(400).json({
                status: 400,
                message: err.message
            });
        });
}

exports.ToopBannerList = function(req, res) {
    TopBanner.find()
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

exports.getTopBanner = function(req, res) {
    TopBanner.findById(req.params.id)
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

exports.updateTopBanner = function(req, res) {
    TopBanner.findById(req.params.id)
        .then(function(post) {
            post.name = req.body.data.name || post.name;
            post.product_link = req.body.data.product_link || post.product_link;
            post.product_rating = req.body.data.product_rating || post.product_rating;
            post.image = req.body.data.image || post.image;
            post.display_order = req.body.data.display_order || post.display_order;
            post.status = req.body.data.status || post.status;
            post.link_type = req.body.data.link_type || post.link_type;
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

exports.deleteTopBanner = function(req, res) {
    TopBanner.findById(req.params.id)
        .then(function(post) {
            post.remove()
                .then(function(deletedPost) {
                    return res.status(200).json({
                        status: 200,
                        data: deletedPost,
                        message: 'Top Banner Delete Successfully!'
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