// fix this
var deck;
var cardValues = {};
var rank;

function shuffle() {
	return shuffleDeck(buildDeck());
}

//create new unshuffled deck
function buildDeck(){
	deck = [];
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
function shuffleDeck(newDeck) {
	
	// var array = [];
	while (0 < newDeck.length){
		var randomNum = Math.round(Math.random()*(newDeck.length-1));
		var card = newDeck[randomNum];
		newDeck.splice(randomNum,1);
		deck.push(card);
	}
	// return array;
};

// create hand object
function Hand(hand) {
	this.cards = hand;
	this.rank = rankHand(hand);
	this.handName = handName(rankHand(hand));
	this.pairs = cardValues.pairs;
	this.nopairs = cardValues.noPairs;
};

//build card object
function card(number,suit) {
	this.number = number;
	this.suit = suit;
	this.buildCard = getFaceCard(number) + suit;
	this.image = "public/images/cards/" + pickCardImage(number, suit);
	this.showCard = getFaceCard(number);
};

//deal one random card and remove it from deck array
function dealCard() {
	var card = deck.shift();
	return card;
};

//deal hand
function dealHand(numCards) {
	let cards = [];
	for (var i = 0; i < numCards; i++) {
		cards.push(dealCard());
	}
	cards.sort(function (a, b) {
		return a.number - b.number
	})

	let hand = new Hand(cards);
	return hand;
};

function pickCardImage(number, suit) {

	if (suit === "H") { suit = "hearts" };
	if (suit === "D") { suit = "diamonds" };
	if (suit === "S") { suit = "spades" };
	if (suit === "C") { suit = "clubs" };

	if (number === 11) { number = "jack" };
	if (number === 12) { number = "queen" };
	if (number === 13) { number = "king" };
	if (number === 14) { number = "ace" };

	return number + "_of_" + suit + ".jpg";
};

function getFaceCard(number) {
	var faceName;

	if (number < 11) { faceName = number };
	if (number === 11) { faceName = "jack" };
	if (number === 12) { faceName = "queen" };
	if (number === 13) { faceName = "king" };
	if (number === 14) { faceName = "ace" };
	return faceName;
};

// var displayCards = "";
function rankHand(hand) {
	findPairs(hand);
	rankPairs();
	isStraightFlush(hand);
	return rank;
};

//find hand value
function findPairs(hand) {
	var i = 0;
	var pairArray = [];
	var noPairArray = [];

	while (i < hand.length) {
		var j = i + 1;
		// check for pair
		if (hand[i].number === hand[j].number) {
			if (j > 3) {
				removePair(i);
				break;
			}
			j++
			// check for set
			if (hand[i].number === hand[j].number) {
				if (j > 3) {
					removePair(i);
					break;
				}
				j++
				// check for 4 of a kind
				if (hand[i].number === hand[j].number) {

					if (i === 0) {
						j++
						removePair(i, j)
						removeNonPair(j)
						break
					};
					if (i === 1) {
						removePair(i);
						break
					}
				} else { removePair(i, j) }
			} else { removePair(i, j) }
		} else {
			removeNonPair(i, j)
		}
		if (j >= hand.length - 1) {
			removeNonPair(j)
			break;
		}
		i = j;

	}

	function removePair(i, j) {
		var cards = hand.slice(i, j);
		for (var i = 0; i < cards.length; i++) {
			pairArray.push(cards[i])
		}
	}

	function removeNonPair(i, j) {
		var card = hand.slice(i, j);
		noPairArray.push(card[0]);
	};


	cardValues = { pairs: pairArray, noPairs: noPairArray };
	// return cardValues;
	// end of findPairs()
};

function rankPairs() {
	if (cardValues.pairs.length < 2) {
		Hand.displayCards = "";
		rank = 0;

	}
	if (cardValues.pairs.length === 2) {
		Hand.displayCards = "You have a pair of " + cardValues.pairs[0].number + "'s";
		rank = 1;
	}

	if (cardValues.pairs.length === 3) {
		displayCards = "You have a set of " + cardValues.pairs[0].number + "'s";
		rank = 3
	}
	if (cardValues.pairs.length === 4) {
		if (cardValues.pairs[0].number === cardValues.pairs[3].number) {
			Hand.displayCards = "You have four of a kind, " + cardValues.pairs[0].number + "'s";
			rank = 7
		} else {
			Hand.displayCards = "You have two of a kind " + cardValues.pairs[0].number + "'s and " + cardValues.pairs[2].number + "'s";
			rank = 2;
		}
	}
	if (cardValues.pairs.length === 5) {
		Hand.displayCards = "You have a full house, " + cardValues.pairs[0].number + " and " + cardValues.pairs[4].number + "'s";
		rank = 6
	}
	// return rank;
}

//check for straight
function isStraight(hand) {
	var straight = true;
	for (var i = 0; i < hand.length - 1; i++) {
		var j = i + 1;
		if ((hand[i].number + 1) !== hand[j].number) {
			straight = false;
			break;
		}
	}
	return straight;
}

// check for flush
function isFlush(hand) {
	var flush = false;

	//put suits into array
	function collectSuit(hand) {
		var flushArray = [];
		for (var i = 0; i < hand.length; i++) {
			flushArray.push(hand[i].suit)
		}
		return flushArray
	}
	var checkFlush = collectSuit(hand);
	var heartFlush = checkFlush.every(function (x) { return x === "H" });
	var diamondFlush = checkFlush.every(function (x) { return x === "D" });
	var spadeFlush = checkFlush.every(function (x) { return x === "S" });
	var clubFlush = checkFlush.every(function (x) { return x === "C" });

	if (heartFlush || diamondFlush || spadeFlush || clubFlush) {
		flush = true;
	}
	return flush;
};

function isStraightFlush(hand) {

	if (isStraight(hand) && isFlush(hand)) {
		rank = 8;
	}
	if ((isStraight(hand) === true) && (isFlush(hand) === false)) {
		rank = 4;
	}
	if ((isFlush(hand) === true) && (isStraight(hand) === false)) {
		rank = 5;
	}
	if (rank === 4) { Hand.displayCards = "You have a Straight." }
	if (rank === 5) { Hand.displayCards = "You have a Flush." }
	if (rank === 8) { Hand.displayCards = "You have a Straight Flush." }
}

function handName(rank) {
	let value = "";
	switch (rank) {
		case 0: value = "High Card";
			break;

		case 1: value = "Pair";
			break;

		case 2: value = "Two Pair";
			break;

		case 3: value = "Set";
			break;

		case 4: value = "Straight";
			break;

		case 5: value = "Flush";
			break;

		case 6: value = "Full House";
			break;

		case 7: value = "Four of a Kind";
			break;

		case 8: value = "Straight Flush";
			break;
	}
	return value;
};


function rankPlayers(hand1, hand2) {
var _winner;
if (hand1.rank === hand2.rank) {
	_winner = rankHandCard(hand1, hand2);
} else {
	if (hand1.rank > hand2.rank) {
		// console.log("Player One Wins with -->" + hand1.handName);
		_winner = "Computer Wins with -->" + hand1.handName;
	} else {
		// console.log("Player Two Wins with -->" + hand2.handName);
		_winner = "Human Wins with -->" + hand2.handName;
	}
}
return _winner;
};

function rankHandCard(hand1, hand2) {
	var winner = "Push";
	var foundWinner = false;

	for (i = 0; i < hand1.pairs.length; i++) {
		if (hand1.pairs[i].number !== hand2.pairs[i].number) {
			if (hand1.pairs[i].number > hand2.pairs[i].number) {
				winner = "Computer Wins with -->" + hand1.handName;
				foundWinner = true;
				break;
			} else {
				winner = "Human Wins with -->" + hand2.handName;
				foundWinner = true;
				break;
			}
		} else {
			foundWinner = false;
		}
	}

	if (foundWinner === false) {
		for (i = 0; i < hand1.nopairs.length; i++) {
			if (hand1.nopairs[i].number !== hand2.nopairs[i].number) {
				if (hand1.nopairs[i].number > hand2.nopairs[i].number) {
					winner = "Computer Wins with -->" + hand1.handName;
					break;
				} else {
					winner = "Human Wins with -->" + hand2.handName;
					break;
				}
			}
		}
	}
	return winner;
};