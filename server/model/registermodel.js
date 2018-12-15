const mongoose = require('mongoose');

var register = mongoose.model('users',{
    name:{type:String},
    email:{type:String},
    password:{type:String},
    DOB:{type:String},
    registed_at: {type: Date, default: Date.now},
    gender:{type:String}
})
module.exports = register