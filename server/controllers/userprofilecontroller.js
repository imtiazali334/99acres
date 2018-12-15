const mongoose = require('mongoose');

var Userprofile = require('../model/userprofilemodel');
const express = require('express');
const app = express();
var ObjectId = require('mongoose').Types.ObjectId;

app.get('/userprofile',(req,res)=>{
    Userprofile.find((err,docs)=>{
        if(!err){res.send(docs)}
        else{console.log("Error in retriveing Data :" +JSON.stringify(err,undefined,2))}
    })
})
app.get('/userprofile/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.send(`No record found with following Id : ${req.params.id}`)

    Userprofile.findById(req.params.id,(err,docs)=>{
        if(!err){res.send(docs)}
        else{console.log("Error in retriveing Data :" +JSON.stringify(err,undefined,2))}
    })
})
app.post('/userprofile',(req,res)=>{
    var userprofile = new Userprofile({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        address:{
            location:req.body.address.location,
            area:req.body.address.area,
            street:req.body.address.street,
            zip:req.body.address.zip
    }
  
})
userprofile.save((err,docs)=>{
    if(!err){res.send(docs)}
    else{console.log('Error in storing data ' +JSON.stringify(err,undefined,2))}
})
})
module.exports = app;