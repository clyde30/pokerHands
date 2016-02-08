var deck = shuffle();

function shuffle() {
	return shuffleDeck(buildDeck());
}

//create new unshuffled deck
function buildDeck(){
	var newDeck = [];

	suit("H");
	suit("D");
	suit("S");
	suit("C");

	//build deck array
	function suit(type) {
		for (var i = 2; i <= 14; i++) {
			newDeck.push(new card(i,type))
		}
	 }
	return newDeck;
};

//Shuffle deck
function shuffleDeck(deck) {

	var array = [];
	while (0 < deck.length){
		var randomNum = Math.round(Math.random()*(deck.length-1));
		var card = deck[randomNum];
		deck.splice(randomNum,1);
		array.push(card);
	}
	return array;
};

//build card object
function card(number, suit) {
	this.number = number;
	this.suit = suit;
	this.buildCard = number + suit;
};

//deal one random card and remove it from deck array
function dealCard() {
	var card = deck.shift();

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
