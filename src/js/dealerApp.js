angular.module('dealApp', [])

  .controller('MainCtrl', [function() {
    var self = this;

    self.dealHand = function (num) {
      self.hand1 = runApp(num);
      self.hand2 = runApp(num);
      console.log(self.hand1);
      console.log(self.hand2);

      rankPlayers(self.hand1, self.hand2);

      //finds winner. Doesn't work with push.
      //todo -- move to function
    };

    self.shuffle = function () {
      shuffle();
      self.hand1 = [];
      self.hand2 = [];
      console.log("Shuffled");
    };

    //keep dealing until hand is reached.
    // self.getHand = function () {
    //   var count = 1;
    //   shuffle();
    //   self.hand = [];
    //   self.hand = runApp(5);
    //   console.log("Shuffled")
    //   var getHand = self.handRankName;
    //   console.log("Get this hand " + getHand);
    //   console.log("Current hand = " + self.hand.handName);
    //   console.log("Current hand = " + self.hand.rank);
    //
    //   while (getHand != self.hand.handName) {
    //     count++
    //     console.log(count);
    //     self.count = count;
    //     shuffle();
    //     self.hand = [];
    //     self.hand = runApp(5);
    //   }
    // }

  }]);
