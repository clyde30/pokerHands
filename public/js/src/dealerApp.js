angular.module('dealApp', [])

  .controller('MainCtrl', [function() {
    var self = this;

    self.dealHand = function (num) {
      self.hand1 = dealHand(num);
      self.hand2 = dealHand(num);

      self.winner = rankPlayers(self.hand1, self.hand2);
      console.log(self.winner);
    };

    self.shuffle = function () {
      shuffle();
      self.hand1 = [];
      self.hand2 = [];
      console.log("Shuffled");
    };

  }]);
