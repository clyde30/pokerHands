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
	let cards = [];
	for (var i = 0; i < numCards; i++) {
		cards.push(dealCard());
	}
	cards.sort(function (a,b){
		return a.number - b.number
	})

	let hand = new Hand(cards);
	return hand;
};
