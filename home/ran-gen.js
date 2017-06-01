'use strict';

var ranGen = document.getElementById('instant');
var returning = document.getElementById('pro');
var ranClass;
var ranRace;
var ranName;
var ranAlignment;
var ranTraits = [];
var ranLanguage = ['Common', ];

function generateRandomPlayer(){
  var classSelector = Math.floor(Math.random() * allClasses.length);
  var raceSelector = Math.floor(Math.random() * allRaces.length);
  ranClass = allClasses[classSelector];
  ranRace = allRaces[raceSelector];
  generateRandomLanguage();
  generateRandomTraits(ranRace);
  generateRandomName(ranRace);
  packageRanValues();
  document.location.href = '../form/form.html';
}

function generateRandomLanguage(){
  var languageSelector = Math.floor(Math.random() * allLanguages.length);
  ranLanguage.push(allLanguages[languageSelector]);
}

function generateRandomTraits(thisRace){
  var traitSelector = Math.floor(Math.random() * thisRace.traits.length);
  if(thisRace === human){
    ranTraits.push(thisRace.traits[0]);
  }else{
    ranTraits.push(thisRace.traits[traitSelector]);
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

ranGen.addEventListener('click', generateRandomPlayer);
returning.addEventListener('click', sessionStorage.clear());
