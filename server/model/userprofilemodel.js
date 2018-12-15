const mongoose = require("mongoose");

var Userprofile = mongoose.model('userprofile',{
    name:{type:String},
    email:{type:String},
    phone:{type:Number},
    address:{
        location:{type:String},
        area:{type:String},
        street:{type:String},
        zip:{type:Number}
    }
})
module.exports = Userprofile