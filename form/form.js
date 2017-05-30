'use strict';
var charClass;
var charRace;
var charLanguages;
var finalStats = [];

function unPack() {
  if(sessionStorage.charRace != undefined && sessionStorage.charClass != undefined) {
    charClass = JSON.parse(sessionStorage.charClass);
    charRace = JSON.parse(sessionStorage.charRace);
    charLanguages = JSON.parse(sessionStorage.charLanguages);
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

function insertLanguages(){
  var langTags = document.getElementsByClassName('char-languages');
  var list = document.createElement('ul');
  for (var i = 0; i < charLanguages.length; i++){
    list.innerHTML = '<li>' + charLanguages[i] + '</li>';
    console.log(list);
  }
  langTags.appendChild = list;
}

insertStats();
insertLanguages();
