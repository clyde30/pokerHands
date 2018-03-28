var app = new Vue( {
  el: '#app',
  data: {
    message: 'Hello Vue'
  },
  methods: {
    shuffle : function () {
      this.hand1 = [];
      this.hand2 = [];
      shuffle();
      console.log("Shuffling");
    }
  }
})

var app2 = new Vue({
  el: '#app2',
  data: {
    showCards: false,
    hand1: this.hand1,
    hand2: this.hand2
  },
  methods: {
    deal : function() {
      this.hand1 = dealHand(5);
      this.hand2 = dealHand(5);

      this.winner = rankPlayers(this.hand1, this.hand2);
      console.log(this.winner);
      // console.log(this.hand1);
    }
  }
})