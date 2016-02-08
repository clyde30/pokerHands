function pickCardImage(card) {
  var suit
  if (card.suit === "H") {suit = "hearts"};
  if (card.suit === "D") {suit = "diamonds"};
  if (card.suit === "S") {suit = "spades"};
  if (card.suit === "C") {suit = "clubs"};

  return card.number+ "_of_"+suit+".jpg";
}
