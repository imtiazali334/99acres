var express = require('express')
var app = express();
var ObjectId = require('mongoose').Types.ObjectId;

var mongoose = require('mongoose');

var Phone = require('../model/phonemodel');

app.get('/phone',(req,res)=>{
Phone.find((err,data)=>{
    if(!err){
        res.status(200).send(data)
    }else(console.log("error in geting data" +JSON.stringify(err,undefined,2)))
});
});
app.get('/phone/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id))
    return res.send(`no record found with id ${req.params.id}`);

    Phone.findById(req.params.id,(err,data)=>{
        if(!err){res.status(200).send(data)}
        else {console.log("error in geting data with id")};
    });
});
app.post('/phone',(req,res)=>{
    var phone = new Phone({
        name:req.body.name,
        model:req.body.model,
        price:req.body.price,
        ram:req.body.ram,
        garenty:req.body.garenty,

    })
    phone.save((err,data)=>{
    if(!err){res.status(200).send(data)}
    else{console.log("geting error for post data "+JSON.stringify(err,undefined,2))}
    });
});
module.exports = app