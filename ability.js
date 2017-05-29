'use strict';
function Player(){
  this.alignment = '';
  this.language = '';
  this.trait = '';
}


// Alignment possibilities
var alignmentArr = ['Lawful Good', 'Lawful Neutral', 'Lawful Evil', 'Neutral Good', 'True Neutral', 'Neutral Evil', 'Chaotic Good', 'Chaotic Neutral', 'Chaotic Evil'];

//Languages
var languageCommon = ['Common'];

var languageArr = ['Abyssal', 'Aquan', 'Auran', 'Celestial', 'Deep Speach', 'Draconic', 'Druidic', 'Dwarvish', 'Elvish', 'Giant', 'Gnomish', 'Goblin', 'Gnoll', 'Halfling', 'Ignan', 'Infernal', 'Orc', 'Primoridial', 'Sylvan', 'Terran', 'Undercommon'];

//Trait Per Race/Class
var traitHuman = ['None'];

var traitHalfling = ['Lucky', 'Brave', 'Halfling Nimbleness', 'Lightfoot'];

var traitHalfOrc = ['Darkvision', 'Menacing', 'Relentless Endurance', 'Savage Attacks'];

var traitElf = ['Darkvision', 'Keen Senses', 'Fey Ancestry', 'Trance'];

var traitDragonborn = ['Draconic Ancestry Black Acid', 'Draconic Ancestry Blue Lightning', 'Draconic Ancestry Brass Fire', 'Draconic Ancestry Bronze Lightning', 'Draconic Ancestry Copper Acid', 'Draconic Ancestry Gold Fire', 'Draconic Ancestry Green Poison', 'Draconic Ancestry Red Fire', 'Draconic Ancestry Silver Cold', 'Draconic Ancestry White Cold', 'Breath Weapon', 'Damage Resistance'];

var traitDwarf = ['Darkvision', 'Dwarven Resilience', 'Dwarven Combat Training', 'Dwarven Toughness', 'Tool Profiency', 'Stonecunning'];

var alignmentChosen = [];
var languageFirstChosen = [];
var languageSecondChosen = [];

//Random Number Generator
function randNum(max){
  return Math.floor(Math.random() * max.length);
}

Player.prototype.getAlignment = function(){
  var alignment = alignmentArr[randNum(alignmentArr)];
  alignmentChosen.push(alignment);
};

Player.prototype.getLanguages = function(){
  var languageFirst = languageFirst[randNum(languageCommon)];
  languageFirstChosen.push(languageFirst);

  var languageSecond = languageSecond[randNum(languageArr)];
  languageSecondChosen.push(languageSecond);
};
