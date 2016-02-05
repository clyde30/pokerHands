angular.module('dealApp', [])

  .controller('MainCtrl', [function() {
    var self = this;
    self.display = function() {
      var card = dealCard();
      self.show = card.buildCard;
    };

    self.shuffle = function () {
      buildDeck();
    };
  }]);
