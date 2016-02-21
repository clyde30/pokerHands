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
  var i = 0;
  var pairArray = [];
  var noPairArray = [];

while(i < hand.length) {
      var j = i + 1;
      // check for pair
      if (hand[i].number  === hand[j].number) {
        if (j  > 3) {
          removePair(i);
          break;
        }
        j++
        // check for set
        if (hand[i].number === hand[j].number){
          if (j  > 3) {
            removePair(i);
            break;
          }
          j++
          // check for 4 of a kind
          if (hand[i].number === hand[j].number){

            if (i === 0){
              j++
              removePair(i,j)
              removeNonPair(j)
              break
            };
            if (i === 1){
              removePair(i);
              break
            }
          }else{removePair(i,j)}
        }else {removePair(i,j)}
      }else {
        removeNonPair(i,j)
      }
      if (j >= hand.length - 1) {
        removeNonPair(j)
        break;
      }
      i = j;

  }

  function removePair(i,j) {
      var cards = hand.slice(i,j);
      for (var i = 0; i < cards.length; i++) {
        pairArray.push(cards[i])
      }
      // pairArray.push(cards);
      // console.log("pair = " + cards)
    }

  function removeNonPair(i,j) {
    var card = hand.slice(i,j);
    noPairArray.push(card[0]);
  };

  cardValues = {pairs:pairArray, noPairs:noPairArray}
  rankPairs();
  // end of findPairs()
};

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

function rankPairs() {
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
