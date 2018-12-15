const express = require('express');
const app = express()
const mongoose = require('mongoose');
var Addproperty= require('../model/addpropertymodel');

app.use(express.static(__dirname + '../upload')); 

var GalleryQuery = Addproperty.find().sort({"_id":-1}).limit(5);

app.get('/gallery',(req,res)=>{
    GalleryQuery.exec((err,docs)=>{
        if(!err){res.send(docs)}
        else{console.log("Error in Geting Gallerys")}
    });
});

module.exports = app;
