var displayCards = "";
var cardValues = {};
var rank;

function rankHand(hand) {
  findPairs(hand);
  rankPairs();
  return rank;
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
    }

  function removeNonPair(i,j) {
    var card = hand.slice(i,j);
    noPairArray.push(card[0]);
  };


  cardValues = {pairs:pairArray, noPairs:noPairArray};
  // return cardValues;
  // end of findPairs()
};

function rankPairs() {
  if (cardValues.pairs.length < 2) {
    rank = 0;
  }
  if (cardValues.pairs.length === 2) {
        displayCards =  "You have a pair of " + cardValues.pairs[0].number + "'s";
        rank = 1;
      }

  if (cardValues.pairs.length === 3) {
    displayCards = "You have a set of " + cardValues.pairs[0].number + "'s";
    rank = 3
  }
  if (cardValues.pairs.length === 4) {
    if (cardValues.pairs[0].number === cardValues.pairs[3].number){
      displayCards = "You have four of a kind, " + cardValues.pairs[0].number + "'s";
      rank = 7
    }else {
      displayCards = "You have two of a kind " + cardValues.pairs[0].number + "'s and " + cardValues.pairs[2].number + "'s";
      rank = 2;
    }
  }
  if (cardValues.pairs.length === 5) {
    displayCards = "You have a full house, " + cardValues.pairs[0].number + " and " + cardValues.pairs[4].number + "'s";
    rank = 6
  }
  console.log(displayCards);
  console.log(rank);
  // return rank;
}

function isStraightFlush(hand){
  var straight;
  var flush;

  //check for straight
  function isStraight(hand) {
    straight = true;
    for (var i = 0; i < hand.length-1; i++) {
  		var j = i + 1;
  		if ((hand[i].number+1) !== hand[j].number){
  			   straight = false;
           break;
  		}
  	}
  }

  // check for flush
  function isFlush(hand) {
  	flush = false;

    //put suits into array
    function collectSuit(hand) {
       var flushArray = [];
  	    for (var i = 0; i < hand.length; i++) {
  		      flushArray.push(hand[i].suit)
  	       }
  	        return flushArray
    }
    	var checkFlush = collectSuit(hand);
    	var heartFlush = checkFlush.every(function(x) {return x === "H"});
    	var diamondFlush = checkFlush.every(function(x) {return x === "D"});
    	var spadeFlush = checkFlush.every(function(x) {return x === "S"});
    	var clubFlush = checkFlush.every(function(x) {return x === "C"});

    	if (heartFlush || diamondFlush || spadeFlush || clubFlush) {
    		flush = true;
    	}
    };

    if (straight && flush){
      rank = 8;
    }
    if ((straight === true) && (flush === false)){
      rank = 4;
    }
    if ((straight === false) && (flush === true)){
      rank = 5;
    }
    if (rank === 4) {displayCards = "You have a Straight."}
    if (rank === 5) {displayCards = "You have a Flush."}
    if (rank === 8) {displayCards = "You have a Straight Flush."}


}
