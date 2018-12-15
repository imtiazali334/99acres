var express = require('express');
bodyParser = require('body-parser');
var app = express()
var ObjectId = require('mongoose').Types.ObjectId;
 
var Brands = require('../model/brands.js');

app.get('/brands',(req,res)=>{
	Brands.find((err,data)=>{
		if(!err){
			res.send(data);
			console.log(data);
		}else{console.log("Error in geting Data " +JSON.stringfy(err,undefind,2))}
	})

});
 app.get('/brands/:id',(req,res)=>{
	if (!ObjectId.isValid(req.params.id))
	 return res.send(`The record was not avliable in database with fllowing Id ${req.params.id}`);

	 Brands.findById(req.params.id,(err,doc)=>{
		  if(!err){
			  res.status(200).send(doc)
			  console.log(doc);
			}
		 else{console.log("geting Error in fetching data")}
	 })
 })
app.post('/api/brands', (req, res) => {
	// console.log(req.body)
	console.log(req.body.address.cityname)

    var brands = new Brands({
		name: req.body.name,
		size: req.body.size,
		price: req.body.price,
		address:[{
			cityname:req.body.address.cityname,
			dpprice:req.body.address.dpprice,
			shopname:req.body.address.shopname,
			code:[{
				pin:req.body.address[0].code[0].pin,
				zip:req.body.address[0].code[0].zip
				
			},{
				main:req.body.address[0].code[1].main
			}]
			// code:req.body.address.code,

			

		}],
		country:req.body.country
    });
    brands.save((err, doc) => {
		if (!err) { res.send(doc); 
		console.log(doc)}
		
        else { console.log('Error in Brands Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

app.delete('/brands/:id',(req,res)=>{
	if(!ObjectId.isValid(req.params.id))
	return res.status(400).send(`no record found with following id ${req.params.id}`);

	Brands.findByIdAndRemove(req.params.id,(err,doc)=>{
		if(!err){res.status(200).send("record remove successfully..!")}
		else{console.log("Error in removing record")}
	})
});
app.put('/brands/:id',(req,res)=>{
	if(!ObjectId.isValid(req.params.id))
	return res.send(`No record found with following ID ${req.params.id}`);
	var mech= {
		name: req.body.name,
		size: req.body.size,
		price: req.body.price
	}
	Brands.findByIdAndUpdate(req.params.id,{$set:mech},{new:true},(err,doc)=>{
		if(!err){
			res.send(doc)
		}else{console.log('error in upadting data :' +JSON.stringify(err,undefined,2))}
	})
})
module.exports = app