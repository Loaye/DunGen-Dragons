'use strict';
var charClass;
var charRace;
var charLanguages;
var charTraits;
var charName;
var finalStats = [];

function unPack() {
  if(sessionStorage.charRace != undefined && sessionStorage.charClass != undefined) {
    charClass = JSON.parse(sessionStorage.charClass);
    charRace = JSON.parse(sessionStorage.charRace);
    charLanguages = JSON.parse(sessionStorage.charLanguages);
    charTraits = JSON.parse(sessionStorage.charTraits);
    charName = JSON.parse(sessionStorage.charName);
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
  var langTags = document.getElementById('char-languages');
  var list = document.createElement('ul');
  var listArr = [];
  for (var i = 0; i < charLanguages.length; i++){
    listArr.push('<li>' + charLanguages[i] + '</li>');
  }
  list.innerHTML = listArr.join('');
  langTags.appendChild (list);
}

function insertTraits(){
  var traitTags = document.getElementById('char-traits');
  var list = document.createElement('ul');
  var listArr = [];
  for (var i = 0; i < charTraits.length; i++){
    listArr.push('<li>' + charTraits[i] + '</li>');
  }
  list.innerHTML = listArr.join('');
  traitTags.appendChild (list);
}

function insertName(){
  var nameTags = document.getElementById('char-name');
  nameTags.value = charName;
}

function insertDescription(){
  var charDescTags = document.getElementById('description');
  charDescTags.innerHTML = charRace.description + ' ' + charClass.description;
}

function insertChart(){
  var ctx = document.getElementById('stat-chart');
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Charisma', 'Constitution', 'Dexterity', 'Intelligence', 'Strength', 'Wisdom'],
      datasets: [{
        label: 'Stats',
        data: finalStats,
        backgroundColor: 'rgba(1, 1, 1, 0.5)',
        borderWidth: 1
      }]
    },
    options: {responvise: false
    }
  });
}

insertStats();
insertLanguages();
insertTraits();
insertName();
insertDescription();
insertChart();
