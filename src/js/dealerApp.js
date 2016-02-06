angular.module('dealApp', [])

  .controller('MainCtrl', [function() {
    var self = this;
    self.display = function() {
      var card = dealCard();
      self.showCards = card.buildCard;
      console.log(card);
    };

    self.dealHand = function () {
      // var numCards = 5;
      var hand = dealHand(5);
      self.showCards = hand;
      console.log(hand);
    };

    self.shuffle = function () {
      buildDeck();


    };
  }]);
