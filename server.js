const express = require('express');

const app = express();

app.listen(8080, function() {
    console.log("Listening on 8080");
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.sendFile(__dirname + "/home.html");
});

app.get('/game', function(req, res) {
    res.sendFile(__dirname + "/game.html");
});

app.get('/contact', function(req,res){
    res.sendFile(__dirname + '/contact.html');
});

app.get('/rules', function(req,res){
    res.sendFile(__dirname + '/rules.html')
})