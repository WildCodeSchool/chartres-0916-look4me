/**
 * Created by rxmat on 23/11/2016.
 */


var mongoose = require("mongoose");

var News = new mongoose.Schema({
    date1 : String,
    date2 : String,
    titre : String,
    description : String,
    image : String
});

mongoose.model("News", News ,'news');