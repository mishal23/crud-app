/**
 * Created by mishal23 on 16/7/17.
 */

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);

/*
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contact_database');

var Schema = mongoose.Schema;
var list = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    number: {type: Number, required: true},
});
var db = mongoose.model('list',list)
*/

var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactlist',function (req,res) {
    //console.log('Received GET request')
    
    db.contactlist.find(function (err,docs) {
    //    console.log(docs);
        res.json(docs);
    });
});


app.put('/contactlist/:id',function (req,res) {
    //console.log("Entered POST request");
    var id = req.params.id;
    //console.log(id);
    //console.log("Name: " + req.params.name);
    //console.log("Email: " + req.params.email);
    //console.log("Number: " + req.params.number);
    
    db.contactlist.findAndModify({
        query:{'_id': mongojs.ObjectId(id)},
        update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
        new: true},
        function (err,doc) {
        if(err)
        {
            console.log("Some error occured");
        }
        else {
            //console.log("Updated to " + doc);
            res.json(doc);
        }
    });

});

app.post('/contactlist',function (req,res) {
    //console.log(req.body);
    
    db.contactlist.insert(req.body,function (err,doc) {
        res.json(doc);
    });
});



app.delete('/contactlist/:id',function (req,res) {
    var id = req.params.id;
    //console.log(id);
    
    db.contactlist.remove({'_id' : mongojs.ObjectId(id)},function (err,doc) {
        res.json(doc);
    });
});

app.get('/contactlist/:id',function (req,res) {
    var id = req.params.id;
    //console.log(id);
    
    db.contactlist.findOne({'_id' : mongojs.ObjectId(id)},function (err,doc) {
     //   console.log(doc);
        res.json(doc);
    });
});


app.listen(3000);
console.log("Running at http://localhost:3000/");