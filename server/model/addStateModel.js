const mongoose = require('mongoose');

var AddState = mongoose.model("state",{
    countryName:{type:String},
    countryId:{type:String},
    stateName:{type:String}
});
module.exports = AddState