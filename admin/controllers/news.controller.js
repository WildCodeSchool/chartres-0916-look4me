/**
 * Created by rxmat on 23/11/2016.
 */

var mongoose = require('mongoose');
var News     = mongoose.model('News');


module.exports.getAll = function(req, res) {
    News
        .find()
        .exec(function(err,news){
            if(err) {
                res
                    .status(500)
                    .json(err);
            } else {
                res
                    .status(200)
                    .json(news);
            }
        });
};

module.exports.newsAddOne = function(req, res){
    News
        .create({
            date : req.body.date,
            date2 : req.body.date2,
            titre : req.body.titre,
            description :req.body.description,
            image : req.body.image
        }, function(err, news) {
            if (err) {
                console.log("Error creating atelier");
                res
                    .status(400)
                    .json(err);
            } else {
                console.log("atelier created!", news);
                res
                    .status(201)
                    .json(news);
            }
        });
};

module.exports.getOne = function(req, res) {
    var newsId = req.params.newsId;

    News
        .findById(newsId)
        .exec(function (err, news) {
            if (err) {
                console.log("Error finding hotel");
                res
                    .status(500)
                    .json(err);
            } else {
                res
                    .status(200)
                    .json(news);
            }
        });
};

module.exports.newsUpdateOne = function(req, res){
    var newsId = req.params.newsId;

    News
        .findById(newsId)
        .exec(function(err, news) {
            if (err) {
                console.log("Error finding atelier");
                res
                    .status(500)
                    .json(err);
                return;
            } else if (!news) {
                console.log("atelier ID not found in database", news);
                res
                    .status(404)
                    .lson({
                        "message": "atelier ID not found " + newsId
                    });
                return;
            }
            news.titre = req.body.titre;
            news.date1 = req.body.date1;
            news.date2 = req.body.date2;
            news.image = req.body.image;
            news.description = req.body.description;
            news
                .save(function(err, newsUpdated) {
                    if(err) {
                        res
                            .status(500)
                            .json(err);
                    } else {
                        res
                            .status(204)
                            .json(newsUpdated);
                    }
                });
        });


};

module.exports.deleteOne = function(req,res){
    var newsId = req.params.newsId;
    
    News
        .findOneAndRemove({'_id' : newsId},function(err, news){
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