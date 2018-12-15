const mongoose = require('mongoose');

var Phone = mongoose.model('phone',{
    name:{type:String},
    model:{type:String},
    price:{type:String},
    ram:{type:String},
    garenty:{type:String},

});
module.exports = Phone ;