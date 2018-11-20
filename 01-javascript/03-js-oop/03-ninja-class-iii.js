class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }
  sayName() {
    console.log(`This ninja's name is ${this.name}.`);
  }
  showStats() {
    console.log(
      `The health, speed and strength for ${this.name} are: ${this
        .health}, ${this.speed} and ${this.strength}.`
    );
  }
  drinkSake() {
    this.health += 10;
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
    this.wisdom = 'wisdom';
  }
  speakWisdom() {
    super.drinkSake();
    console.log('woo hoo, in the Sensei class');
  }
  showStats() {
    console.log(`demo that we can add speakWisdom method ${this.wisdom}`);
  }
}

// example output
const superSensei = new Sensei('Master Splinter');
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
