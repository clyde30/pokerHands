module.exports = {
    deck: buildDeck()
}

// var deck = new Deck();

// console.log("Object = " + deck);
var deck = buildDeck();

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

function Card(number, suit) {
    this.number = number;
    this.suit = suit;
}