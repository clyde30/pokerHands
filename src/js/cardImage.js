function pickCardImage(number, suit) {

  if (suit === "H") {suit = "hearts"};
  if (suit === "D") {suit = "diamonds"};
  if (suit === "S") {suit = "spades"};
  if (suit === "C") {suit = "clubs"};

  if (number === 11) {number = "jack"};
  if (number === 12) {number = "queen"};
  if (number === 13) {number = "king"};
  if (number === 14) {number = "ace"};


  return number + "_of_"+suit+".jpg";
}
