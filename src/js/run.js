function runApp (numCards) {
  var cards = dealHand(numCards);
  hand = new Hand(cards);
  return hand;
}
