const mongoose =require('mongoose');

var AddData = mongoose.model('addData',{
    name :{type:String},
    contact:{type:Number},
    propertyType:{type:String},
    bedRoom:{type:String},
    postedBy:{type:String},
    photo:{type:String},
    address:{
        state:{type:String},
        district:{type:String},
        city:{type:String},
        area:{type:String},
        bulldingName:{type:String},
        doorNo:{type:String},
        street:{type:String},
		landMark:{type:String},
        zip:{type:Number},
    }
});

module.exports = AddData