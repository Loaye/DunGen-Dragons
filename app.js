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

var classInstance = new CharClass();
var raceInstance = new Race();

function Player(name, playerClass, playerRace) {
  this.name = name;
  this.playerClass = playerClass;
  this.playerRace = playerRace;
}

var testPlayer = new Player('Bill Cosby', classInstance, raceInstance);
