/**
 * Created by mishal23 on 10/7/17.
 */
var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    routes = require('./server/routes/web'),
    apiRoutes = require('./server/routes/api'),
    connection = require("./server/config/db");

// Create express server
var app = express();

// Configuration

// Get data from body(POST)

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// static files for angular app html and js
app.use(express.static(path.join(__dirname,'app')));
// static files for angular,bootstarp library
app.use(express.static('node_modules'));

// configure routes
app.use('/',routes);
app.use('/api',apiRoutes);

// set port number for runnung server
var port = process.env.port || 3000;

// start express server
app.listen(port,function () {
    console.log("Server running at : http://localhost:" + port);
});