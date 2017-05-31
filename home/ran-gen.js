'use strict';

var ranGen = document.getElementById('instant');
var ranClass;
var ranRace;
var ranName;
var ranTraits = [];
var ranLanguage = ['Common', ];

var allLanguages = ['Abyssal', 'Aquan', 'Auran', 'Celestial', 'Deep Speach', 'Draconic', 'Druidic', 'Dwarvish', 'Elvish', 'Giant', 'Gnomish', 'Goblin', 'Gnoll', 'Halfling', 'Ignan', 'Infernal', 'Orc', 'Primoridial', 'Sylvan', 'Terran', 'Undercommon'];

function generateRandomPlayer(){
  var classSelector = Math.floor(Math.random() * allClasses.length);
  var raceSelector = Math.floor(Math.random() * allRaces.length);
  ranClass = allClasses[classSelector];
  ranRace = allRaces[raceSelector];
  generateRandomLanguage();
  generateRandomTraits(ranRace);
  generateRandomName(ranRace);
  packageRanValues();
}

function generateRandomLanguage(){
  var languageSelector = Math.floor(Math.random() * allLanguages.length);
  ranLanguage.push(allLanguages[languageSelector]);
}

function generateRandomTraits(thisRace){
  var traitNumber = Math.floor(Math.random() * 3 + 1);
  while(ranTraits.length < traitNumber){
    var traitSelector = Math.floor(Math.random() * thisRace.traits.length);
    if(ranTraits.includes(thisRace.traits[traitSelector])){
      ranTraits.push(thisRace.traits[traitSelector - 1]);
    }else if(thisRace === human){
      return ranTraits.push(thisRace.traits[0]);
    }else{
      ranTraits.push(thisRace.traits[traitSelector]);
    }
  }
}

function generateRandomName(thisRace){
  var firstName = thisRace.nameConventions[0];
  var lastName = thisRace.nameConventions[1];
  var firstSelector = Math.floor(Math.random() * firstName.length);
  var secondSelector = Math.floor(Math.random() * lastName.length);

  ranName = firstName[firstSelector] + ' ' + lastName[secondSelector];
}

function packageRanValues(){
  sessionStorage.charRace = JSON.stringify(ranRace);
  sessionStorage.charClass = JSON.stringify(ranClass);
  sessionStorage.charLanguages = JSON.stringify(ranLanguage);
  sessionStorage.charTraits = JSON.stringify(ranTraits);
  sessionStorage.charName = JSON.stringify(ranName);
}

ranGen.addEventListener('click', generateRandomPlayer());
