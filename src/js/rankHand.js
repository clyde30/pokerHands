
function runApp () {
  shuffle();
  var hand = dealHand(5);
  console.log(hand);
  rankHand(hand);
  }

function rankHand(hand) {
  console.log(hand);
  findPairs(hand);
  isStraight(hand);
  isFlush(hand)
}

//find hand value !incomplete!
function findPairs(hand) {
  var pair = [];
  while(hand.length > 1) {
		var i = 0;
		var j = 1;
		if (hand[i].number === hand[j].number) {
			if (hand[i].number === hand[j++].number) {
				if (hand[i].number === hand[j++].number) {
          // 4 of a kind
          removePairs(i,j);
					if (hand[j++].number !== null) {
						removeNoPair(j);
					};
				} else {
          // Set
          j = j - 1;
          removePairs(i,j);
        };
			} else {
        // Pair
        hand.value = 
        j = j - 1;
        removePairs(i,j);
      }
		} else removeNoPair(i);
	}

  function removePairs(i,j) {
    var array = hand.splice(i,j);
    pair.push(array);
  };

  function removeNoPair (x) {
    hand.splice(x,1);
  }
  console.log(pair);
  return pair;
};

//check for straight
function isStraight(hand) {
	for (var i = 0; i < hand.length-1; i++) {
		var j = i + 1;
		if ((hand[i].number+1) === hand[j].number){
			isStraight = true;
		}else {
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
}
