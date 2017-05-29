var allRaces = [];
var allClasses = [];

function CharClass(className, stats, description) {
  this.name = className;
  this.stats = stats;
  this.description = description;
  allClasses.push(this);
}

function Race(race, stats, description, abilities) {
  this.race = race;
  this.stats = stats;
  this.description = description;
  this.abilities = abilities;
  allRaces.push(this);
}
//Array order for stats: Charima, Constitution, Dexterity, Intelligence, Strength, Wisdom
var dragonborn = new Race('DragonBorn', [1, 0, 0, 0, 2, 0], 'I don\'t know', [])
var elf = new Race('Elf', [0, 2, 0, 0, 0, 1], 'I don\'t know', [])
var dwarf = new Race('Dwarf', [0, 0, 2, 0, 0, 1], 'I don\'t know', [])
var halfling = new Race('Halfling', [1, 0, 2, 0, 0, 0], 'I don\'t know', [])
var halfOrc = new Race('DragonBorn', [0, 1, 0, 0, 2, 0], 'I don\'t know', [])
var human = new Race('Human', [1, 1, 1, 1, 1, 1], 'I don\'t know', [])

var warrior = new CharClass('warrior', [0, 11, 0, 0, 2, 0], 'some stuff');
var cleric = new CharClass('cleric', [1, 8, 0, 0, 0, 2], 'some stuff');
var ranger = new CharClass('ranger', [0, 10, 2, 0, 1, 0], 'some stuff');
var rogue = new CharClass('rogue', [0, 9, 2, 0, 0, 0], 'some stuff');
var bard = new CharClass('bard', [1, 8, 2, 0, 0, 0], 'some stuff');
var mage = new CharClass('mage', [0, 6, 1, 2, 0, 0], 'some stuff');


function Player(name, playerClass, playerRace) {
  this.name = name;
  this.playerClass = playerClass;
  this.playerRace = playerRace;
}
