/**
 * Created by rxmat on 23/11/2016.
 */

/**
 * Created by rxmat on 23/11/2016.
 */

/**
 * Created by rxmat on 23/11/2016.
 */

var mongoose = require('mongoose');
var Service     = mongoose.model('Service');


module.exports.getAll = function(req, res) {
    Service
        .find()
        .exec(function(err,service){
            if(err) {
                res
                    .status(500)
                    .json(err);
            } else {
                res
                    .status(200)
                    .json(service);
            }
        });
};

module.exports.getAllByType = function(req, res){
    var type = req.params.type;
    Service
        .find({type : type})
        .exec(function(err, service){
            if(err){
                res
                    .status(500)
                    .json(err)
            } else {
                res
                    .status(200)
                    .json(service);
            }
        });
};

module.exports.getAllByGenre = function(req, res){
    var genre = req.params.genre;
    Service
        .find({genre : genre})
        .exec(function(err, service){
           if(err){
               res
                   .status(500)
                   .json(err)
           } else {
               res
                   .status(200)
                   .json(service);
           }
        });

};

module.exports.getOne = function(req, res) {
    var serviceId = req.params.serviceId;

    Service
        .findById(serviceId)
        .exec(function (err, service) {
            if (err) {
                console.log("Error finding hotel");
                res
                    .status(500)
                    .json(err);
            } else {
                res
                    .status(200)
                    .json(service);
            }
        });
};

module.exports.AddOne = function(req, res){
    Service
        .create({
            titre : req.body.titre,
            description : req.body.description,
            genre : req.body.genre,
            type : req.body.type,
            tarif : req.body.tarif,
            img : req.body.img
        }, function(err, service) {
            if (err) {
                console.log("Error creating atelier");
                res
                    .status(400)
                    .json(err);
            } else {
                console.log("atelier created!", service);
                res
                    .status(201)
                    .json(service);
            }
        });
};

module.exports.UpdateOne = function(req, res){
    var serviceId = req.params.serviceId;

    Service
        .findById(serviceId)
        .exec(function(err, service) {
            if (err) {
                console.log("Error finding atelier");
                res
                    .status(500)
                    .json(err);
                return;
            } else if (!service) {
                console.log("atelier ID not found in database", service);
                res
                    .status(404)
                    .lson({
                        "message": "atelier ID not found " + serviceId
                    });
                return;
            }
                service.titre = req.body.titre;
                service.description = req.body.description;
                service.genre = req.body.genre;
                service.type = req.body.type;
                service.tarif = req.body.tarif;
                service.img = req.body.img;
            service
                .save(function(err, serviceUpdated) {
                    if(err) {
                        res
                            .status(500)
                            .json(err);
                    } else {
                        res
                            .status(204)
                            .json(serviceUpdated);
                    }
                });
        });


};

module.exports.deleteOne = function(req,res){
    var servicesId = req.params.serviceId;

    Service
        .findOneAndRemove({'_id' : servicesId},function(err, service){
            if(err){
                res
                    .status(500)
                    .json(err)
            } else {
                res
                    .status(200)
                    .json({success :true})
            }
        });
};