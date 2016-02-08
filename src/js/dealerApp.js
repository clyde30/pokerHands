angular.module('dealApp', [])

  .controller('MainCtrl', [function() {
    var self = this;

    self.dealOne = function() {
      var card = dealCard();
      self.image = pickCardImage(card);
      self.showCards = card.buildCard;
      console.log(card);
    };

    self.dealHand = function () {
      // var numCards = 5;
      hand = dealHand(5);
      self.showCards = hand.buildCard;
      console.log(hand);
    };

    self.shuffle = function () {
      shuffle();
    };
  }]);
