angular.module('dealApp', [])

  .controller('MainCtrl', [function() {
    var self = this;

    self.dealHand = function (num) {
      self.hand = runApp(num);
      console.log(self.hand);
    };

    self.shuffle = function () {
      shuffle();
      self.hand = [];
      console.log("Shuffled")
    };

    //keep dealing until hand is reached.
    self.getHand = function () {
      var count = 1;
      shuffle();
      self.hand = [];
      self.hand = runApp(5);
      console.log("Shuffled")
      var getHand = self.handRankName;
      console.log("Get this hand " + getHand);
      console.log("Current hand = " + self.hand.handName);
      console.log("Current hand = " + self.hand.rank);

      while (getHand != self.hand.handName) {
        count++
        console.log(count);
        self.count = count;
        shuffle();
        self.hand = [];
        self.hand = runApp(5);
      }


    }

  }]);
