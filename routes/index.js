var express = require('express');
var router = express.Router();
multiparty = require('connect-multiparty');
multipartyMiddleware = multiparty();
var userCtrl = require('../admin/controllers/users.controller');
var newsCtrl = require("../admin/controllers/news.controller");
var galleriesCtrl =  require("../admin/controllers/galleries.controller");
var servicesCtrl = require("../admin/controllers/services.controller");

router
     .route('/news')
     .get(newsCtrl.getAll)
     .post(userCtrl.authenticate,newsCtrl.newsAddOne);

router
     .route('/news/:newsId')
     .get(userCtrl.authenticate,newsCtrl.getOne)
     .put(userCtrl.authenticate,newsCtrl.newsUpdateOne)
     .delete(userCtrl.authenticate,newsCtrl.deleteOne);

router
    .route("/galleries")
    .get(galleriesCtrl.getAll)
    .post(userCtrl.authenticate,galleriesCtrl.AddOne);

router
    .route("/gallery/upload")
    .post(userCtrl.authenticate,multipartyMiddleware,galleriesCtrl.UploadFile);

router
    .route('/galleries/:galleryId')
    .put(userCtrl.authenticate,galleriesCtrl.UpdateOne)
    .delete(userCtrl.authenticate,galleriesCtrl.DeleteOne);

router
    .route('/services/:genre')
    .get(servicesCtrl.getAllByGenre);

router
    .route('/services/:type')
    .get(servicesCtrl.getAllByType);

router
    .route("/services")
    .get(servicesCtrl.getAll)
    .post(userCtrl.authenticate,servicesCtrl.AddOne);

router
    .route('/services/:serviceId')
    .get(userCtrl.authenticate,servicesCtrl.getOne)
    .put(userCtrl.authenticate,servicesCtrl.UpdateOne)
    .delete(userCtrl.authenticate,servicesCtrl.deleteOne);

router
    .route('/users/login')
    .post(userCtrl.login);
router
    .route('/users/register')
    .post(userCtrl.register);


module.exports = router;
