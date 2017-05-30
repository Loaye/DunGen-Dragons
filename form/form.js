'use strict';
var charClass;
var charRace;
var finalStats = [];

function unPack() {
  if(sessionStorage.charRace != undefined && sessionStorage.charClass != undefined) {
    charClass = JSON.parse(sessionStorage.charClass);
    charRace = JSON.parse(sessionStorage.charRace);
    restrictValues();
  }
}

unPack();

function restrictValues() {
  document.getElementsByName('class')[0].value = charClass.name;
  document.getElementsByName('class')[0].disabled = true;
  document.getElementsByName('race')[0].value = charRace.race;
  document.getElementsByName('race')[0].disabled = true;
}

function randomStats() {
  for (var i = 0; i < 6; i++) {
    var randNum = Math.floor(Math.random() * 18 + 3);
    finalStats.push(randNum + charClass.stats[i] + charRace.stats[i]);
  }
}

function insertStats() {
  randomStats();
  var statTags = document.getElementsByClassName('stats');
  for (var i = 0; i < statTags.length; i++) {
    statTags[i].innerHTML = finalStats[i];
  }
}

insertStats();
