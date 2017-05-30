'use strict';

var ranGen = document.getElementsByName('instant');
var ranClass;
var ranRace;
var ranName;

function generateRandomPlayer(){
  var classSelector = Math.floor(Math.random() * allClasses.length);
  var raceSelector = Math.floor(Math.random() * allRaces.length);
  ranClass = allClasses[classSelector];
  ranRace = allRaces[raceSelector];
  console.log(raceSelector);
  console.log(classSelector);
  console.log(ranRace);
  console.log(ranClass);
  packageValues();
}

function packageValues(){
  sessionStorage.charRace = JSON.stringify(ranRace);
  sessionStorage.charClass = JSON.stringify(ranClass);
}

ranGen.addEventListener('click', generateRandomPlayer());
