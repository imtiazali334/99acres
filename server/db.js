const mongoose = require('mongoose');
port = '3200';

url= "mongodb://localhost/diwali";
mongoose.connect(url,(err)=>{
	if(!err){
		console.log("db connected successfully",{ useNewUrlParser: true });
	}else{console.log("error in db connection " +JSON.Stringfy(err,undefind,))}
})
module.exports = mongoose;