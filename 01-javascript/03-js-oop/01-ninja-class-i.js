// var ninja1 = new Ninja('Hyabusa');
// ninja1.sayName();
// -> "My ninja name is Hyabusa!"
// ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
function ninConstructor(name) {
  var nin = {};
  nin.name = name;
  nin.health = 100;
  nin.speed = 3;
  nin.strength = 3;
  nin.sayName = function() {
    console.log('Mi nombre es ' + name);
  };
  nin.showStats = function() {
    console.log(
      'health, speed and strength are: ' +
        nin.health +
        ', ' +
        nin.speed +
        ', ' +
        nin.strength +
        '.'
    );
  };
  return nin;
}

var nicci = new ninConstructor('Nicci');
nicci.sayName();
nicci.showStats();

function ninja(name) {
  var ninja = {};
  this.name = name;
  this.health = 100;
  this.speed = 3;
  this.strength = 3;
  this.sayName = function() {
    console.log('Mi nombre es ' + name);
  };
  this.showStats = function() {
    console.log(
      'health, speed and strength are: ' +
        this.health +
        ', ' +
        this.speed +
        ', ' +
        this.strength +
        '.'
    );
  };
  return this;
}
var maya = new ninja('maya');
maya.showStats();
maya.sayName();
ninja.prototype.happiness = 'happiness level medium';
console.log(maya.happiness);
maya.happiness = 'happiness level high';
console.log(maya.happiness);
