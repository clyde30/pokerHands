// create hand object
function Hand(numCards) {
  this.deal = dealHand(numCards);
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
