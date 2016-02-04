//array of 52 randomly delt cards
var deck = [];

// card suits
var buildDeck = function() {
	suit("H");
	suit("D");
	suit("S");
	suit("C");

	//build deck
	function suit(type) {
		for (var i = 2; i <= 14; i++) {
			deck.push(new card(i,type))
		}
 	}
};

//build card object
function card(number, suit) {
	this.number = number;
	this.suit = suit;
	this.buildCard = number + suit;
};

//deal one random card and remove it from deck array
function dealCard() {
	var deal = Math.round(Math.random()*(deck.length-1));
	var card = deck.splice(deal,1);
	card = card[0];

	return card;
};

//deal hand
function dealHand(numCards) {
	var hand = [];
	for (var i = 0; i < numCards; i++) {
		hand.push(dealCard());
	}
	return hand;
};
