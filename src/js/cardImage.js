function pickCardImage(card) {
  var suit
  var num = card.number;
  
  if (card.suit === "H") {suit = "hearts"};
  if (card.suit === "D") {suit = "diamonds"};
  if (card.suit === "S") {suit = "spades"};
  if (card.suit === "C") {suit = "clubs"};

  var faceCard = "";
  if (card.number === 11) {num = "jack"};
  if (card.number === 12) {num = "queen"};
  if (card.number === 13) {num = "king"};
  if (card.number === 14) {num = "ace"};


  return num + "_of_"+suit+".jpg";
}
