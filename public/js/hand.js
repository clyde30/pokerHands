// create hand object
function Hand(hand) {
  this.cards = hand;
  this.rank = rankHand(hand);
  this.handName = handName(rankHand(hand));
  this.pairs = cardValues.pairs;
  this.nopairs = cardValues.noPairs;
}

//deal hand
function dealHand(numCards) {
	var hand = [];
	for (var i = 0; i < numCards; i++) {
		hand.push(dealCard());
	}
	hand.sort(function (a,b){
		return a.number - b.number
	})
	return hand;
};
