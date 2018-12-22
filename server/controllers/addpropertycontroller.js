const express = require('express');

const app = express();
var path = require('path');
var multer = require('multer');
var ObjectId = require('mongoose').Types.ObjectId;

var Addproperty = require('../model/addpropertymodel');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },

});

var upload = multer({ storage: storage });
var type = upload.array('upload');

// app.use( express.static(path.join(__dirname + '/upload')));
// app.use(express.static(path.join(__dirname, '../upload')));
app.use(express.static(__dirname + '../upload')); 

// app.use('/image', express.static(__dirname + '../upload/'));
// app.use(express.static(__dirname + '../upload'));
// console.log( (__dirname, '../upload'));


app.get('/addproperty',(req,res)=>{

    Addproperty.find((err,docs)=>{
        if(!err){res.status(200).send(docs)}
        else{console.log("Error in retriveing Data "+JSON.stringify(err,undifind,2))}
    });
});
app.get('/addproperty/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.send(`no records get with following Id:${req.params.id} `);

    Addproperty.findById(req.params.id,(err,docs)=>{
        if(!err){res.send(docs)}
        else{console.log(`Error in getting data with folowing id:${req.params.id}`)}
    });

});

app.post('/addproperty',type,(req,res)=>{
    var filesPath ="";
    console.log(req.body);
    console.log(req.files)
    if( req.files && req.files.path){
        filesPath=req.files.path;   

    }
    var addproperty = new Addproperty({
        name :req.body.name,
        flat:req.body.flat,
        photo:req.files[0].path,
        address:{
            location:req.body.location,
            landmark:req.body.landmark,
            area:req.body.area,
            zip:req.body.zip
        }
    })
    addproperty.save((err,docs)=>{
        console.log(docs)
        if(!err){res.send(docs)}
        else{console.log("Error in retriveing Data "+JSON.stringify(err,undifind,2))}
    });
});

app.put('/addproperty/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
    return res.send(`No records with following ${req.params.id}`);
    var filesPath ="";
    console.log(req.body);
    console.log(req.files)
    if( req.files && req.files.path){
        filesPath=req.files.path;   

    }
    var addproperty = {
        name :req.body.name,

        flat:req.body.flat,
        photo:req.files[0].path,
        address:{
            location:req.body.address.location,
            landmark:req.body.address.landmark,
            area:req.body.address.area,
            zip:req.body.address.zip
    }
}
Addproperty.findOneAndUpdate(req.param.id,{$set:addproperty},{new : true},(err,docs)=>{
    if(!err){res.send(docs)}
    else{console.log('Error in upadate'+JSON.stringify(err,undefind,2))}
})
})

app.delete('/addproperty/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.send(`no records get with following Id:${req.params.id} `);

    // if(req.params.id === null|| req.params.id ||req.params.id === 'undefind')
    // return res.send("No Records found with id" +req.params.id)

    Addproperty.findByIdAndDelete(req.params.id,(err,docs)=>{
        if(!err){res.send("Record Deleted successfully" ) }
        else { console.log("Error in Deleting record")}
    })
})
module.exports = app;