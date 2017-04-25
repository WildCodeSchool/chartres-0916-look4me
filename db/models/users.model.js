/**
 * Created by rxmat on 23/11/2016.
 */

var mongoose = require("mongoose");

var User = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    firstName : String,
    lastName : String,
    email : String,
    password: {
        type: String,
        required: true
    }
});

mongoose.model("User",User ,'users');
