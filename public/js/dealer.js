module.exports = {
    deck: deck
}

var deck = buildDeck();

function buildDeck() {
    var newDeck = [];
    var suitList = ["Hearts", "Clubs", "Spades", "Diamonds"];

    for (var i = 0; i < suitList.length; i++) {
        for (var val = 2; val <= 14; val++) {
            newDeck.push(new Card(val, suitList[i]));
        }
    }

    return newDeck;
}

function Card(number, suit) {
    this.number = number;
    this.suit = suit;
}