// create hand object
function Hand(hand) {
  this.hand = hand;
  this.rank = rankHand(hand);
  this.displayHand = displayCards;
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

function displayHand(hand) {

}
