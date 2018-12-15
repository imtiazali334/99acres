const express = require('express');
const app = express();
var ObjectId = require('mongoose').Types.ObjectId;

const AddCountry = require('../model/addCountryModel');

app.get('/addcountry', (req, res) => {
    AddCountry.find((err, docs) => {
        if (!err) { res.send(docs) }
    });
});

app.post('/addcountry', (req, res) => {
    if(req.body._id !== null && req.body._id && req.body._id !== 'undefined'){
        _id = req.body._id
    // if (!ObjectId.isValid(req.body._id))
    //     return res.send(`No Recrd found with follwoing id ${req.body.id}`);

    var updateCountry = {
        countryName: req.body.countryName
    }
    AddCountry.findByIdAndUpdate(_id,{$set:updateCountry},{new : true},(err, docs) => {
        if (!err) { res.send(docs) }
        else { console.log(`Error in updating Data ${JSON.stringify(err, undefined, 2)}`) }
    });
}
    else {
        console.log(req.body._id);
        var addCountry = new AddCountry({
            countryName: req.body.countryName
        });
        addCountry.save((err, docs) => {
            if (!err) { res.send(docs) }
            else { (console.log("Error in posting Country " + JSON.stringify(err, undefined, 2))) }
        });

}   
});
app.delete('/addcountry/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.send(`No Reocord Found with this id ${req.params.d}`);
    AddCountry.findByIdAndDelete(req.params.id, (err, docs) => {
        if (!err) {
            return res.status(200).send(docs)
        } else { console.log(`Error in Removing record ${JSON.stringify(err, undefined, 2)}`) }
    });
})

module.exports = app;
