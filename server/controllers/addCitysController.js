const express = require('express');
const app = express();
var ObjectId = require('mongoose').Types.ObjectId;
var AddCity = require('../model/addCityModel');


app.get('/citys',(req,res)=>{
    AddCity.find((err,docs)=>{
        if(!err){res.send(docs)}
        else {console.log(`Error in Gettin Data : ${JSON.stringify(err,undefined,2)}`)}
    });
});

app.post('/citys',(req,res)=>{
    console.log(req.body)
    if(req.body._id !== null && req.body._id && req.body._id !=='undefined'){
        console.log('put')
        var addCity = {
            cityName:req.body.cityName,
            stateName:req.body.stateName,
            countryName:req.body.countryName,
            // countryId:req.body.countryId,
            // stateId:req.body.stateId,
        }
        _id = req.body._id;
        AddCity.findByIdAndUpdate(_id,{$set:addCity},{new:true},(err,docs)=>{
            if(!err){res.send(docs);}
            else{ console.log(`Error in updateing record ${JSON.stringify(err,undefind,2)}`)}
        })
    }else{
    var addCity = new AddCity ({
        cityName:req.body.cityName,
        stateName:req.body.stateName,
        countryName:req.body.countryName,
        countryId:req.body.countryId,
        stateId:req.body.stateId,
    });
    addCity.save((err,docs)=>{
        if(!err){
            res.send(docs);
        }else{console.log(`Error in posting City :${JSON.stringify(err,undefind,2)}`)}
    });
    }
});


app.delete('/citys/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.send(`No record Found with id ${req.params.id}`);
    
    AddCity.findByIdAndDelete(req.params.id,(err,docs)=>{
        if(!err){res.send(docs)}
        else console.log(`Error in get Records ${JSON.stringify(err,undefind,2)}`)
    });
});
module.exports = app;