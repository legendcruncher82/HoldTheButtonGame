var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + '/style.css');
});

app.get('/script.js', function(req, res) {
    res.sendFile(__dirname + '/script.js');
});

app.listen(8000, function() {
    console.log('listening on port 8000');
});