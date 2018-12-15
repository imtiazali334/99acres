const mongoose = require('mongoose');

var Brands = mongoose.model('brands',{
	name :{type:String},
	size:{type:String},
	price:{type:String},
	address:[{
		cityname:{type:String},
		dpprice:{type:Number},
		shopname:{type:String},
		code:[{
			pin:{type:Number},
			zip:{type:Number},
			main:{type:String}
	}]
	}],
	country:{type:String}
	
});

module.exports =  Brands ;
