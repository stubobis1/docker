//Load express module with `require` directive
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

//Define request response in root URL (/)
app.get('/', function (req, res) {
    console.log('process.env:', process.env);
    MongoClient.connect(MongoUrl, function(err, db) {
        if (err !== null) {
            res.send('Could not connect to MongoDB');
        } else {
            res.send('Connected to MongoDB');
            db.close();
        }
    });
});

//Launch listening server on port 8081
app.listen(8081, function () {
    console.log('app listening on port 8081!');


});
