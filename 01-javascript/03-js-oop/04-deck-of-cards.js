class deckOfCard {
  constructor() {
    this.deck = [];
  }
  newDeck() {
    this.deck = [];
    const cardVal = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    const cardSuit = ['S.', 'H.', 'C.', 'D.'];
    for (let index = 0; index < cardSuit.length; index++) {
      var currSuit = cardSuit[index];
      // console.log(currValue);
      for (let index = 0; index < cardVal.length; index++) {
        var currValue = currSuit + cardVal[index];
        this.deck.push(currValue);
      }
    }
    // console.log(this);
    return this;
  }

  shuffle() {
    var m = this.deck.length,
      t,
      i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = this.deck[m];
      this.deck[m] = this.deck[i];
      this.deck[i] = t;
    }
    return this;
  }
  reset() {
    this.deck.length = 0;
    this.deck = [];
    const cardVal = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    const cardSuit = ['S.', 'H.', 'C.', 'D.'];
    for (let index = 0; index < cardSuit.length; index++) {
      var currSuit = cardSuit[index];
      for (let index = 0; index < cardVal.length; index++) {
        var currValue = currSuit + cardVal[index];
        this.deck.push(currValue);
      }
    }
    // console.log(this.deck.length);
    return this;
  }

  deal_random() {
    var rand_card_num = Math.floor(Math.random() * 52) + 1;
    var rand_card = this.deck[rand_card_num];
    console.log('random card: ' + rand_card);
    for (let index = 0; index < this.deck.length; index++) {
      if (this.deck[index] === rand_card) {
        this.deck[index] = this.deck[index + 1];
      }
    }
    this.deck.length--;
    console.log(this.deck.length);
    return this;
  }
}
var nicci = new deckOfCard();
var ray = new deckOfCard();
// nicci.newDeck().reset();
// console.log(nicci);
// console.log(nicci.shuffle());
// console.log(nicci.reset());
// console.log(nicci);
nicci.newDeck();
ray.newDeck();
console.log(
  nicci
    .deal_random()
    .deal_random()
    .deal_random()
);
console.log(ray.shuffle());
