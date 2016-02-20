angular.module('dealApp', [])

  .controller('MainCtrl', [function() {
    var self = this;

    self.dealHand = function (num) {
      self.hand = dealHand(num);
      runApp(self.hand);
      console.log(self.hand);
    };

    self.shuffle = function () {
      shuffle();
      self.hand = [];
      console.log("Shuffled")
    };
  }]);
