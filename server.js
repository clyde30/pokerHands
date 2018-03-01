const express = require('express');
const bodyParser = require('body-parser');
const dealer = require('./public/js/dealer');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.listen(8080, function() {
    console.log("Listening on 8080");
});

app.get('/test', function(req, res){
    var deck = dealer.shuffle;
    // var deck = dealer.buildDeck;
    
    res.render('pages/test', {
        deck: deck
    });
});

app.get('/', function(req,res){
    res.render('pages/index');
});

app.get('/game', function(req, res) {
    res.sendFile(__dirname + "/game.html");
});

// app.get('/contact', function(req,res){
//     res.sendFile(__dirname + '/contact.html');
// });

// app.post('/contact', function(req,res) {
//     console.log(req.body);
//     res.send("Hello " + req.body.name);
// })


// app.get('/:username', function(req, res) {
//     console.log(req.params);
//     res.send('Hello ' + req.params.username);
// })

// app.get('/rules', function(req,res){
//     res.sendFile(__dirname + '/rules.html')
// })