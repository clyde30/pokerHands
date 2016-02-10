angular.module('dealApp', [])

  .controller('MainCtrl', [function() {
    var self = this;

    self.dealOne = function() {
      var card = dealCard();
      self.image = pickCardImage(card);
      self.showOneCard = card.buildCard;
      console.log(card);
    };

    self.dealHand = function () {
      hand = dealHand(5);
      self.showHand = hand.buildCard;
      console.log(hand);
    };

    self.shuffle = function () {
      shuffle();
    };
  }]);
