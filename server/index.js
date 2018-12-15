const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const  mongoose  = require('./db.js');
var auth = require('./authentication/auth');
var brands = require('./controllers/brands.js');
var Phone = require('./controllers/phonecontroller');
var addproperty = require('./controllers/addpropertycontroller');
var userprofile = require('./controllers/userprofilecontroller');
var enquiry = require('./controllers/enquirycontroller');
var gallery = require('./controllers/gallerycontroller');
var register = require('./controllers/registercontroller');
var addData = require('./controllers/addDataController');
var addCountry = require('./controllers/addCountryController');
var addState = require('./controllers/addStateController');
var addCity = require('./controllers/addCitysController');
app.use('/upload1',express.static(path.join(__dirname + '/upload1')));

app.use('/upload',express.static(path.join(__dirname + '/upload')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors( '*'));

app.use('/',brands);
app.use('/',Phone);
app.use('/',addproperty);
app.use('/',userprofile);
app.use('/',enquiry);
app.use('/',gallery);
app.use('/',register);
app.use('/',auth);
app.use('/',addData);
app.use('/',addCountry);
app.use('/',addState);
app.use('/',addCity)

app.listen(port, () => console.log('Server started at port : '+port));

app.use('/welcome',(req,res)=>{
    res.send("yees working")
})

