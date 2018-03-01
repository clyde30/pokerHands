function runApp (numCards) {
  var cards = dealHand(numCards);
  hand = new Hand(cards);
  // rankHand(hand);
  return hand;

}
