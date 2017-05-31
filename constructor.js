var allRaces = [];
var allClasses = [];

function CharClass(className, stats, description) {
  this.name = className;
  this.stats = stats;
  this.description = description;
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
var dragonborn = new Race('Dragonborn', [1, 0, 0, 0, 2, 0], 'I don\'t know', ['Draconic Ancestry Black Acid', 'Draconic Ancestry Blue Lightning', 'Draconic Ancestry Brass Fire', 'Draconic Ancestry Bronze Lightning', 'Draconic Ancestry Copper Acid', 'Draconic Ancestry Gold Fire', 'Draconic Ancestry Green Poison', 'Draconic Ancestry Red Fire', 'Draconic Ancestry Silver Cold', 'Draconic Ancestry White Cold', 'Breath Weapon', 'Damage Resistance'], dragonbornNames);

var elf = new Race('Elf', [0, 2, 0, 0, 0, 1], 'I don\'t know', ['Darkvision', 'Keen Senses', 'Fey Ancestry', 'Trance'], elfNames);

var dwarf = new Race('Dwarf', [0, 0, 2, 0, 0, 1], 'I don\'t know', ['Darkvision', 'Dwarven Resilience', 'Dwarven Combat Training', 'Dwarven Toughness', 'Tool Profiency', 'Stonecunning'], dwarfNames);

var halfling = new Race('Halfling', [1, 0, 2, 0, 0, 0], 'I don\'t know', ['Lucky', 'Brave', 'Halfling Nimbleness', 'Lightfoot'], halflingNames);

var halfOrc = new Race('Half Orc', [0, 1, 0, 0, 2, 0], 'I don\'t know', ['Darkvision', 'Menacing', 'Relentless Endurance', 'Savage Attacks'], orcNames);

var human = new Race('Human', [1, 1, 1, 1, 1, 1], 'I don\'t know', ['None'], humanNames);

//Class of Player
var warrior = new CharClass('Warrior', [0, 1, 0, 0, 2, 0], 'some stuff');
var cleric = new CharClass('Cleric', [1, 0, 0, 0, 0, 2], 'some stuff');
var ranger = new CharClass('Ranger', [0, 0, 2, 0, 1, 0], 'some stuff');
var rogue = new CharClass('Rogue', [0, 1, 2, 0, 0, 0], 'some stuff');
var bard = new CharClass('Bard', [1, 0, 2, 0, 0, 0], 'some stuff');
var mage = new CharClass('Mage', [0, 0, 1, 2, 0, 0], 'some stuff');


function Player(name, playerClass, playerRace, stats, story) {
  this.name = name;
  this.playerClass = playerClass;
  this.playerRace = playerRace;
  this.stats = stats;
  this.story = story;
  this.language = ['Common',];
}
