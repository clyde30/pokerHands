const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

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

app.post('/contact', function(req,res) {
    console.log(req.body);
    res.send("Hello " + req.body.name);
})

app.get('/:username', function(req, res) {
    console.log(req.params);
    res.send('Hello ' + req.params.username);
})

app.get('/rules', function(req,res){
    res.sendFile(__dirname + '/rules.html')
})