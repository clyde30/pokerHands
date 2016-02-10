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
      self.hand = dealHand(5);
      console.log(self.hand);
    };

    self.shuffle = function () {
      shuffle();
    };
  }]);
