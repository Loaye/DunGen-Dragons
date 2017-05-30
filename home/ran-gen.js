'use strict';

var ranGen = document.getElementsByName('instant');
var ranClass;
var ranRace;
var ranName;
var ranLanguage = ['Common', ];

var allLanguages = ['Abyssal', 'Aquan', 'Auran', 'Celestial', 'Deep Speach', 'Draconic', 'Druidic', 'Dwarvish', 'Elvish', 'Giant', 'Gnomish', 'Goblin', 'Gnoll', 'Halfling', 'Ignan', 'Infernal', 'Orc', 'Primoridial', 'Sylvan', 'Terran', 'Undercommon'];

function generateRandomPlayer(){
  var classSelector = Math.floor(Math.random() * allClasses.length);
  var raceSelector = Math.floor(Math.random() * allRaces.length);
  var languageSelector = Math.floor(Math.random() * allLanguages.length);
  ranClass = allClasses[classSelector];
  ranRace = allRaces[raceSelector];
  ranLanguage.push(allLanguages[languageSelector]);
  packageValues();
}

function packageValues(){
  sessionStorage.charRace = JSON.stringify(ranRace);
  sessionStorage.charClass = JSON.stringify(ranClass);
  sessionStorage.charLanguages = JSON.stringify(ranLanguage);
}

ranGen.addEventListener('click', generateRandomPlayer());
