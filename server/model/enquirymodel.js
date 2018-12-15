var mongoose = require('mongoose');

var Enquiry = mongoose.model('enquiry',{
    name:{type:String},
    email:{type:String},
    contact:{type:String},
   comment:{type:String},
    date: { type: Date, default: Date.now }
});
module.exports = Enquiry ;