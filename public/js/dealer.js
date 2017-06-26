module.exports = {
    buildDeck: buildDeck(),
    shuffle: shuffle
}

function buildDeck() {
    var suitList = ["Hearts", "Clubs", "Spades", "Diamonds"];
    var deck = [];
    for (var i = 0; i < suitList.length; i++) {
        for (var val = 2; val <= 14; val++) {
            var card = new Card(val, suitList[i]);
            deck.push(card);
        }
    }
    return deck;
}

var shuffle = function(deck) {
    while (0 < deck.length){
		var shuffledDeck = [];
        var randomNum = Math.round(Math.random()*(deck.length-1));
		var card = deck[randomNum];
		deck.splice(randomNum,1);
		shuffledDeck.push(card);
	}
    return shuffledDeck;
}

function Card(number, suit) {
    this.number = number;
    this.suit = suit;
}