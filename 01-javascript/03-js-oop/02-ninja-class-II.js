function Ninja(name) {
  var ninja = {};
  this.name = name;
  this.health = 100;
  var speed = 3;
  var strength = 3;
  this.sayName = function() {
    console.log('Mi nombre es ' + name);
  };
  this.showStats = function() {
    console.log(
      'health, speed and strength for ' +
        this.name +
        ' are: ' +
        this.health +
        ', ' +
        this.speed +
        ', ' +
        this.strength +
        '.'
    );
  };
  this.drinkSake = function() {
    this.health += 10;
  };
  Ninja.prototype.punch = function(ninja) {
    ninja.health -= 5;
    console.log(
      ninja.name + ' lost health. ' + this.name + 'punched him / her.'
    );
  };
  return this;
}

var ninja1 = new Ninja('Hyabusa');
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
const blueNinja = new Ninja('Bill Gates');
const redNinja = new Ninja('Hyabusa');

blueNinja.sayName();
redNinja.sayName();

blueNinja.punch(redNinja);
// redNinja.kick(blueNinja);

blueNinja.showStats();
redNinja.showStats();
