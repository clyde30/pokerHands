angular.module('dealApp', [])

  .controller('MainCtrl', [function() {
    var self = this;

    self.dealOne = function() {
      var card = dealCard();
      self.image = card.image;
      self.showOneCard = card.buildCard;
      console.log(card);
    };

    self.dealHand = function () {
      hand = dealHand(5);
      self.showHand = hand.buildCard;
      self.image = pickCardImage(card);
      console.log(hand);
    };

    self.shuffle = function () {
      shuffle();
    };
  }]);
