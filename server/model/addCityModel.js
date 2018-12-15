const mongoose = require('mongoose');

var AddCity = mongoose.model('citys',{
    cityName:{type:String},
    stateName:{type:String},
    countryName:{type:String},
    countryId:{type:String},
    stateId:{type:String}
});
module.exports = AddCity;