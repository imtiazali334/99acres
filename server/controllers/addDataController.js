const express = require('express');

const app = express();
var path = require('path');
var multer = require('multer');
var ObjectId = require('mongoose').Types.ObjectId;

var AddData = require('../model/addDataModel');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload1');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        
    },
});

var upload1 = multer({ storage: storage });
var type = upload1.array('photo');


app.use(express.static(__dirname + '../upload1'));
app.get('/adddata', (req, res) => {

    AddData.find((err, docs) => {
        if (!err) { res.status(200).send(docs) }
        else { console.log("Error in retriveing Data " + JSON.stringify(err, undifind, 2)) }
    });
});
app.get('/adddata/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.send(`no records get with following Id:${req.params.id} `);

    AddData.findById(req.params.id, (err, docs) => {
        if (!err) { res.send(docs) }
        else { console.log(`Error in getting data with folowing id:${req.params.id}`) }
    });

});

app.post('/adddata', type, (req, res) => {
    var filesPath = "";
    console.log(req.body);
    console.log(req.files)
    if (req.files && req.files.path) {
        filesPath = req.files.path;

    }
    var addData = new AddData({
        name: req.body.name,
        bedRoom: req.body.bedRoom,
        contact: req.body.contact,
        propertyType: req.body.propertyType,
        postedBy: req.body.postedBy,
        photo: req.files[0].path,
        date:req.body.date,
        address: {
            state: req.body.state,
            district: req.body.district,
            bulldingName: req.body.bulldingName,
            doorNo: req.body.doorNo,
            city: req.body.city,
            area: req.body.area,
            street: req.body.street,
            landMark: req.body.landMark,
            zip: req.body.zip
        }
    })
    addData.save((err, docs) => {
        console.log(docs)
        if (!err) { res.send(docs) }
        else { console.log("Error in retriveing Data " + JSON.stringify(err, undifind, 2)) }
    });
});

app.put('/adddata/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.send(`No records with following ${req.params.id}`);
    var filesPath = "";
    console.log(req.body);
    console.log(req.files)
    if (req.files && req.files.path) {
        filesPath = req.files.path;

    }
    var addData = {
        name: req.body.name,
        beadroom: req.body.beadroom,
        contact: req.body.contact,
        propertyType: req.body.propertyType,
        postedBy: req.body.postedBy,
        photo: req.files[0].path,
        address: {
            state: req.body.address.state,
            district: req.body.address.district,
            city: req.body.address.city,
            bulldingName: req.body.address.bulldingName,
            doorNo: req.body.address.doorNo,
            area: req.body.address.area,
            street: req.body.address.street,
            landmark: req.body.address.landmark,
            zip: req.body.address.zip
        }
    }
    AddData.findOneAndUpdate(req.param.id, { $set: addData }, { new: true }, (err, docs) => {
        if (!err) { res.send(docs) }
        else { console.log('Error in upadate' + JSON.stringify(err, undefind, 2)) }
    })
})

app.delete('/adddata/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.send(`no records get with following Id:${req.params.id} `);

    AddData.findByIdAndDelete(req.params.id, (err, docs) => {
        if (!err) { res.send("Record Deleted successfully") }
        else { console.log("Error in Deleting record") }
    })
})
module.exports = app;