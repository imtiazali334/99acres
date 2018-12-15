const mongoose =require('mongoose');

var Addproperty = mongoose.model('addproperty',{
	name :{type:String},
    flat:{type:String},
    photo:{type:String},
    address:{
        location:{type:String},
		landmark:{type:String},
		area:{type:String},
        zip:{type:Number},
    }
});

module.exports = Addproperty