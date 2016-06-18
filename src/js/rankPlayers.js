function rankPlayers(hand1, hand2) {
  if (hand1.rank === hand2.rank) {
    rankHandCard(hand1, hand2)
} else {
  if (hand1.rank > hand2.rank) {
    console.log("Player One Wins with -->" + hand1.handName);
  } else {
    console.log("Player Two Wins with -->" + hand2.handName);
  }
}
};

function rankHandCard(hand1, hand2) {
  var winner = "Push";
  var foundWinner = false;

  for(i = 0; i < hand1.pairs.length; i++){
    if(hand1.pairs[i].number !== hand2.pairs[i].number) {
      if(hand1.pairs[i].number > hand2.pairs[i].number) {
        winner = "Player 1 wins";
        foundWinner = true;
        break;
      } else {
        winner = "Player 2 wins";
        foundWinner = true;
        break;
      }
    } else {
      foundWinner = false;
    }
  }

  if(foundWinner === false) {
      for(i = 0; i < hand1.nopairs.length; i++){
        if(hand1.nopairs[i].number !== hand2.nopairs[i].number) {
          if(hand1.nopairs[i].number > hand2.nopairs[i].number) {
            winner = "Player 1 wins";
            break;
          } else {
            winner = "Player 2 wins";
            break;
          }
        }
      }
    }

    console.log(winner);
  }
