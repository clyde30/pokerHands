var cardValues = {};

function runApp (hand) {
  var cards = hand;
  rankHand(cards);
}

function rankHand(hand) {
  displayHand(hand);
  isStraight(hand);
  isFlush(hand);
  findPairs(hand);
}

//find hand value
function findPairs(hand) {

  var pairArray = [];
  var noPairArray = [];

  while(hand.length > 0) {
      var i = 0;
      var j = 1;
      // check for pair
      if (findPairValues(i,j,hand,2)) {
        // check for set
        j = 2
        if (findPairValues(i,j,hand,3)){
          // check for 4 of a kind
          j = 3
          if (findPairValues(i,j,hand,4)){
            j = 4
            removePairs(j);
          }else{removePairs(j)}
        }else {removePairs(j)}
      }else {noPair()}

  }

  function removePairs(j) {
    var x = j
    for (var i = 0; i < x; i++){
      pairArray.push(removeCard());
    }
  }

  function noPair() {
    noPairArray.push(removeCard());
  };

  function removeCard () {
    var card = hand.shift()
    return card;
  };

  cardValues = {pairs:pairArray, noPairs:noPairArray}

  rankPairs(cardValues);
  // end of findPairs()
};


var findPairValues = function (i,j,hand,handLength) {
  if (hand.length < handLength){
    return false
  }else {
    if (hand[i].number === hand[j].number){
      return true;
    } else {
        return false;
      }
  }
}

//check for straight
function isStraight(hand) {
  var isStraight = true;
  for (var i = 0; i < hand.length-1; i++) {
		var j = i + 1;
		if ((hand[i].number+1) !== hand[j].number){
			   isStraight = false;
         break;
		}
	}
  console.log("Is the hand a straight? " + isStraight)
  return isStraight;
}

// check for flush
function isFlush(hand) {
	var isFlush = false;

  //put suits into array
  function collectSuit(hand) {
	   var flush = [];
	    for (var i = 0; i < hand.length; i++) {
		      flush.push(hand[i].suit)
	       }
	        return flush
  }
	var flush = collectSuit(hand);
	var heartFlush = flush.every(function(x) {return x === "H"});
	var diamondFlush = flush.every(function(x) {return x === "D"});
	var spadeFlush = flush.every(function(x) {return x === "S"});
	var clubFlush = flush.every(function(x) {return x === "C"});

	if (heartFlush || diamondFlush || spadeFlush || clubFlush) {
		isFlush = true;
	}
  console.log("Is the hand a flush? " + isFlush)
	return isFlush;
};

function rankPairs(cardValues) {
  var rank = "";
  if (cardValues.pairs.length < 2) {
    rank = "No Pairs";
  }
  if (cardValues.pairs.length === 2) {
        rank =  "You have a pair of " + cardValues.pairs[0].number + "'s";
      }

  if (cardValues.pairs.length === 3) {
    rank = "You have a set of " + cardValues.pairs[0].number + "'s";
  }
  if (cardValues.pairs.length === 4) {
    if (cardValues.pairs[0].number === cardValues.pairs[3].number){
      rank = "You have four of a kind, " + cardValues.pairs[0].number + "'s";
    }else rank = "You have two of a kind " + cardValues.pairs[0].number + "'s and " + cardValues.pairs[2].number + "'s";
  }
  if (cardValues.pairs.length === 5) {
    rank = "You have a full house, " + cardValues.pairs[0].number + " and " + cardValues.pairs[4].number + "'s";
  }
  return console.log(rank);
}
