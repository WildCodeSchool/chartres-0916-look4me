/**
 * Created by rxmat on 23/11/2016.
 */


var mongoose = require("mongoose");

var Gallery = new mongoose.Schema({
    titre : String,
    temoignage : String,
    name1 : String,
    path1 : String,
    type1 : String,
    name2 : String,
    path2 : String,
    type2 : String
});


mongoose.model('Gallery', Gallery, 'galleries');