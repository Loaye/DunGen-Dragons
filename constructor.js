var allRaces = [];
var allClasses = [];

function CharClass(className, stats, description, abilities) {
  this.name = className;
  this.stats = stats;
  this.description = description;
  this.abilities = abilities;
  allClasses.push(this);
}

function Race(race, stats, description, abilities) {
  this.race = race;
  this.stats = stats;
  this.description = description;
  this.abilities = abilities;
  allRaces.push(this);
}

var dragonborn = new Race('DragonBorn', [], 'I don\'t know', [])
var elf = new Race('Elf', [], 'I don\'t know', [])
var dwarf = new Race('Dwarf', [], 'I don\'t know', [])
var halfling = new Race('Halfling', [], 'I don\'t know', [])
var halfOrc = new Race('DragonBorn', [], 'I don\'t know', [])
var human = new Race('Human', [], 'I don\'t know', [])

var 


function Player(name, playerClass, playerRace) {
  this.name = name;
  this.playerClass = playerClass;
  this.playerRace = playerRace;
}
