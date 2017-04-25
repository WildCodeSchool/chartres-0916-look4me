/**
 * Created by rxmat on 23/11/2016.
 */

/**
 * Created by rxmat on 23/11/2016.
 */

var mongoose = require('mongoose');
var Gallery     = mongoose.model('Gallery');
var mv  = require("mv");


module.exports.getAll = function(req, res) {
    Gallery
        .find()
        .exec(function(err,gallerie){
            if(err) {
                res
                    .status(500)
                    .json(err);
            } else {
                res
                    .status(200)
                    .json(gallerie);
            }
        });
};

module.exports.AddOne = function(req, res){
    Gallery
        .create({
            titre : req.body.titre
        }, function(err, gallerie) {
            if (err) {
                console.log("Error creating atelier");
                res
                    .status(400)
                    .json(err);
            } else {
                console.log("atelier created!", gallerie);
                res
                    .status(201)
                    .json(gallerie);
            }
        });
};

module.exports.UploadFile = function(req,res){
    console.log(req.body);
    console.log(req.files);
    var nameFile1 = req.files.file1.path.split("/");
    console.log(nameFile1);
    var nameFile2 = req.files.file2.path.split("/");
    console.log(nameFile2);
    mv(req.files.file1.path, process.env.PWD+"/public/uploads/"+nameFile1[nameFile1.length-1], function(err) {
        console.log(err);
    });
    mv(req.files.file2.path, process.env.PWD+"/public/upload/"+nameFile2[nameFile2.length-1],function(err){
       console.log(err);
    });

    Gallery
        .create({
            titre : req.body.titre,
            temoignage : req.body.temoignage,
            name1 : req.files.file1.originalFilename,
            path1 : process.env.PWD+"/public/uploads/"+nameFile1[nameFile1.length-1],
            type1 : req.files.file1.type,
            name2 : req.files.file2.originalFilename,
            path2 : process.env.PWD+"/public/upload/"+nameFile2[nameFile2.length-1],
            type2 : req.files.file2.type
        }, function(err, gallery){
            if(err){
                res.status(500).json(err);
            } else {
                res.status(201).json(gallery);
            }
        })

    
};

module.exports.DeleteOne = function(req,res){
    var galleryId = req.params.galleryId;

    Gallery
        .findOneAndRemove({'_id' : galleryId},function(err, news){
            if(err){
                res
                    .status(500)
                    .json(err)
            } else {
                res
                    .status(200)
                    .json({success : true})
            }
        });
};

module.exports.UpdateOne = function(req, res){
    var galleryId = req.params.galleryId;

    Gallery
        .findById(galleryId)
        .exec(function(err, gallery) {
            if (err) {
                console.log("Error finding atelier");
                res
                    .status(500)
                    .json(err);
                return;
            } else if (!gallery) {
                console.log("atelier ID not found in database", gallery);
                res
                    .status(404)
                    .lson({
                        "message": "atelier ID not found " + galleryId
                    });
                return;
            }
            gallery.titre = req.body.titre;
            gallery
                .save(function(err, gallerieUpdated) {
                    if(err) {
                        res
                            .status(500)
                            .json(err);
                    } else {
                        res
                            .status(204)
                            .json(gallerieUpdated);
                    }
                });
        });


};