//READING MATERIAL: https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md

console.group('The JS Way Object Oriented Programming');
/* Dogs
Complete the following program to add the definition of the Dog class.

Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!". */

/* -------------------------------------------------------------------------- */
/*                       TODO: DEFINE THE DOG CLASS HERE                      */
/* -------------------------------------------------------------------------- */

class Dog{
  constructor(name, species, size){
    this.name = name;
    this.species = species;
    this.size = size;
  }

  bark(){
    if(this.size > 60) return "Grrr! Grrr!";
    else return "Woof! Woof!";
  }
}
/* -------------------------------------------------------------------------- */

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);


/* Character inventory
Improve the example RPG to add character inventory management according to the following rules:

A character's inventory contains a number of gold and a number of keys.

Each character begins with 10 gold and 1 key.

The character description must show the inventory state.

When a character slays another character, the victim's inventory goes to its vanquisher. */

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; // XP is always zero for new characters
    this.gold = 10; 
    this.key = 1;
  }
  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.gold} gold and ${target.key} key(s)`
        );
        this.xp += bonusXP;
        this.gold += target.gold;
        this.key += target.key;
      }
    } else {
      console.log(`${this.name} can’t attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength, ${this.xp} XP points, ${this.gold} gold and ${this.key} key(s).`;
  }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());


/* Account list
Let's build upon a previous account object exercise. A bank account is still defined by:

A name property.
A balance property, initially set to 0.
A credit method adding the value passed as an argument to the account balance.
A describe method returning the account description.
Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description. */

class bank{
  constructor(name, balance){
    this.name = name;
    this.balance = balance;
  }
  credit(value){
    this.balance += value;
  }
  describe(){
    return `owner: ${this.name}, balance: ${this.balance}`;
  }
}

const sean = new bank("Sean", 0);
const brad = new bank("Brad", 0);
const georges = new bank("Georges", 0);

[sean, brad, georges].forEach(account => {
  account.credit(1000);
  console.log(account.describe());
});

console.groupEnd("The JS Way Object Oriented Programming");
