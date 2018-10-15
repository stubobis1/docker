//Load express module with `require` directive
var express = require('express');
var app = express();
var mysql = require('mysql');

//Define request response in root URL (/)
app.get('/', function (req, res) {
    console.log('process.env:', process.env);
    var connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    });
    connection.connect(function (err) {
        if (err) {
            res.send('Could not connect to MySQL ' + err.stack);
        } else {
            res.send('Connected to MySQL - Thread ' + connection.threadId);
        }
    });
});

//Launch listening server on port 8081
app.listen(8081, function () {
    console.log('app listening on port 8081!');


});
