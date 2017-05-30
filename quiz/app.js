'use strict';

var mainSection = document.getElementsByClassName('main master')[0];
var masterList = mainSection.getElementsByTagName('ul')[0];
var imageList = masterList.getElementsByTagName('img');
var classImages = ['../img/smil.png','../img/smil.png','../img/smil.png','../img/smil.png','../img/smil.png','../img/smil.png'];
var chosenRace;
var chosenClass;

function newImages() {
  for (var i= 0; i < classImages.length; i++) {
    var newImage = document.createElement('img');
    var newLi = document.createElement('li');
    newImage.setAttribute('src', classImages[i]);
    newLi.appendChild(newImage);
    masterList.appendChild(newLi);
  }
}

function imageSwap() {
  while (masterList.hasChildNodes()) {
    masterList.removeChild(masterList.lastChild);
  }
  newImages();
  createLastHandler();
}

function raceHandler(raceindex) {
  return function () {
    chosenRace = raceindex;
    imageSwap();
  };
}

function classHandler(raceindex) {
  return function () {
    chosenClass = raceindex;
    packageValues();
    document.location.href = '../form.html';
  };
}

function packageValues() {
  sessionStorage.race = JSON.stringify(chosenRace);
  sessionStorage.charClass = JSON.stringify(chosenClass);
}

function createFirstHandler() {
  for (var i = 0; i < imageList.length; i++) {
    imageList[i].addEventListener('click', raceHandler(allRaces[i]));
  }
}

function createLastHandler() {
  for (var i = 0; i < imageList.length; i++) {
    imageList[i].addEventListener('click', classHandler(allClasses[i]));
  }
}


createFirstHandler();
