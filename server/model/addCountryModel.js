var mongoose = require('mongoose');

var AddCountry = mongoose.model("country",{
    countryName:{type:String}
});

// var AddState = mongoose.model("state",{
//     stateName:{type:String},
//     countryName:{type:String},
//     CountryId:{type:String}
// });
module.exports = AddCountry;