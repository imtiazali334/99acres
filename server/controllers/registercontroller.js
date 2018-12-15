var express = require('express')
var app = express();
var ObjectId = require('mongoose').Types.ObjectId;
var User= require('../model/registermodel')

var ObjectId = require('mongoose').Types.ObjectId

app.get('/register',(req,res)=>{
User.find((err,docs)=>{
    if(!err){res.status(200).send(docs)}
    else{console.log("Error in Geting Data " +JSON.stringify(err,undefined,2))}
});

});

app.post('/register',(req,res)=>{

    var user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        gender:req.body.gender,
        DOB:req.body.DOB
    });

    user.save((err,docs)=>{
        if(!err){res.status(200).send(docs),
        console.log(docs)}
        else{console.log("Error in Register " +JSON.stringify(err,undefind,2))}
    })
});
app.get('/register/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.send("No User Found " +req.params.id);
    
    User.findById(req.params.id,(err,docs)=>{
        if(!err){
            res.send(docs);
        }else{console.log("Error in geting data !!")}
    });
});
module.exports  = app;