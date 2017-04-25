/**
 * Created by rxmat on 23/11/2016.
 */

var mongoose = require("mongoose");

var Service = mongoose.Schema({
    titre : String,
    description : String,
    genre : String,
    type : String,
    tarif : String,
    img : String
});

mongoose.model("Service",Service,'services');