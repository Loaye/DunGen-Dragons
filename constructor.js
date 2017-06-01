var allRaces = [];
var allClasses = [];

function CharClass(className, stats, description, charImg) {
  this.name = className;
  this.stats = stats;
  this.description = description;
  this.charImg = charImg;
  allClasses.push(this);
}

function Race(race, stats, description, traits, raceName) {
  this.race = race;
  this.stats = stats;
  this.description = description;
  this.traits = traits;
  this.nameConventions = raceName;
  allRaces.push(this);
}

//Array order for stats: Charima, Constitution, Dexterity, Intelligence, Strength, Wisdom
//Race of Player
var dragonborn = new Race('Dragonborn', [1, 0, 0, 0, 2, 0], dragonbornDesc, dragonbornTraits, dragonbornNames);
var elf = new Race('Elf', [0, 2, 0, 0, 0, 1], elfDesc, elfTraits, elfNames);
var dwarf = new Race('Dwarf', [0, 0, 2, 0, 0, 1], dwarfDesc, dwarfTraits, dwarfNames);
var halfling = new Race('Halfling', [1, 0, 2, 0, 0, 0], halflingDesc, halflingTraits, halflingNames);
var halfOrc = new Race('Half Orc', [0, 1, 0, 0, 2, 0], halfOrcDesc, halfOrcTraits, halfOrcNames);
var human = new Race('Human', [1, 1, 1, 1, 1, 1], humanDesc, ['None'], humanNames);

//Class of Player
var warrior = new CharClass('Warrior', [0, 1, 0, 0, 2, 0], warriorDesc, warriorImg);
var cleric = new CharClass('Cleric', [1, 0, 0, 0, 0, 2], clericDesc, clericImg);
var ranger = new CharClass('Ranger', [0, 0, 2, 0, 1, 0], rangerDesc, rangerImg);
var rogue = new CharClass('Rogue', [0, 1, 2, 0, 0, 0], rogueDesc, rogueImg);
var bard = new CharClass('Bard', [1, 0, 2, 0, 0, 0], bardDesc, bardImg);
var mage = new CharClass('Mage', [0, 0, 1, 2, 0, 0], mageDesc, mageImg);


function Player(name, playerClass, playerRace, stats, story) {
  this.name = name;
  this.playerClass = playerClass;
  this.playerRace = playerRace;
  this.stats = stats;
  this.story = story;
  this.language = ['Common',];
}
