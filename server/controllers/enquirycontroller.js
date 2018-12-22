var express = require('express')
var app = express();
var ObjectId = require('mongoose').Types.ObjectId;
var Enquiry = require('../model/enquirymodel');
var auth = require('../authentication/auth')
var mongoose = require('mongoose');
var jwt    = require('jsonwebtoken');


app.use('/api', function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    console.log("qwewty");
    // decode token
    if (token) {
  
      // verifies secret and checks exp
      jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });    
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;    
          next();
        }
      });
  
    } else {
  
      // if there is no token
      // return an error
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      });
    }
  });

app.get('/enquiry',(req,res)=>{
    Enquiry.find((err,docs)=>{
        if(!err){res.status(200).send(docs)}
        else{console.log("Error in retriveing Data "+JSON.stringify(err,undifind,2))}
    });
});
app.get('/api/enquiry/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.send(`No records found with id ${req.params.id}`);

    Enquiry.findById(req.params.id,(err,docs)=>{
        if(!err){res.status(200).send(docs)}
        else{console.log(`Error in updating record with id ${req.params.id}`)}
    })
})
app.post('/api/enquiry', (req, res) => {
    var enquiry = new Enquiry({
        name: req.body.name,
        email: req.body.email,
        contact:req.body.contact,
        comment:req.body.comment
       
    })
    enquiry.save((err, docs) => {
        if (!err) { res.send(docs) }
        else { console.log("Error in posting Data") };
    })
});
app.put('/api/enquiry/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.send(`No records found with id ${req.params.id}`);

    var enquiry = {
        name: req.body.name,
        email: req.body.email,
        contact:req.body.contact,
        comment:req.body.comment 
    }
    Enquiry.findByIdAndUpdate(req.params.id,{$set:enquiry},{new:true},(err,docs)=>{
        if(!err){res.status(200).send(docs)}
        else{console.log(`Error in updating record with id ${req.params.id}`)}
    })
})

module.exports = app;