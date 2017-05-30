'use strict';
var charClass;
var race;
var finalStats = [];

function unPack() {
  if(sessionStorage.race != undefined && sessionStorage.charClass != undefined) {
    charClass = JSON.parse(sessionStorage.charClass);
    race = JSON.parse(sessionStorage.race);
    restrictValues();
  }
}

unPack();

function restrictValues() {
  document.getElementsByName('class')[0].value = charClass.name;
  document.getElementsByName('class')[0].disabled = true;
  document.getElementsByName('race')[0].value = race.race;
  document.getElementsByName('race')[0].disabled = true;
}

function randomStats() {
  for (var i = 0; i < 6; i++) {
    var randNum = Math.floor(Math.random() * 18 + 1);
    finalStats.push(randNum + charClass.stats[i] + race.stats[i]);
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
