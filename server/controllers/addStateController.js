var express = require('express');
var app = express();
var ObjectId = require('mongoose').Types.ObjectId;

const AddState = require('../model/addStateModel');

app.get('/addstate',(req,res)=>{
    AddState.find((err,docs)=>{
        if(!err){res.send(docs)}
        else {console.log(`Error in GetingData From Server ${JSON.stringify(err,undefined,2)}`)}
    });
});
app.get('/addstate/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.send(`No record Found with id ${req.params.id} `)
    AddState.findById(req.params.id,(err,docs)=>{
        if(!err){res.send(docs)}
        else {console.log(`Error in GetingData From Server ${JSON.stringify(err,undefined,2)}`)}
    });
});

app.post('/addstate',(req,res)=>{
    if(req.body._id !== null && req.body._id && req.body._id !== 'undefined'){
        var addState ={
            countryName:req.body.countryName,
         // countryId :req.body.countryId,
            stateName :req.body.stateName 
        }
        console.log("put call");
        id = req.body._id;
        AddState.findOneAndUpdate(id,{$set:addState},{new:true},(err,docs)=>{
            if(!err){res.send(docs)}
            else{console.log(`Error in updating data ${JSON.stringify(err,undefind,2)}`)}
        })
    }else{
    console.log("post call");
    var addState = new AddState({
        countryName:req.body.countryName,
        countryId :req.body.countryId,
        stateName :req.body.stateName
    });

    addState.save((err,docs)=>{
        if(!err){res.send(docs)}
        else {console.log(`Error in GetingData From Server ${JSON.stringify(err,undefined,2)}`)}
    });
}
});

app.delete('/addstate/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.send(`No Recourd found with that id ${req.params.id}`);

    AddState.findByIdAndDelete(req.params.id,(err,docs)=>{
        if(!err){res.send(docs)}
        else{console.log(`Error in Delete record`)}
    });
});
module.exports = app;