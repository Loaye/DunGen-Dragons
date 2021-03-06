'use strict';

var controller = {
  loggedIn : false,
  currentUser : undefined
};

var form = document.getElementsByClassName('login')[0];
var oldForm = form.innerHTML;



function invalid() {
  alert('Invalid user name or password');
  for(var i = 0; i < 2; i++) {
    form.getElementsByTagName('input')[i].style.outline = '3px solid red';
  }
}

function valid(userName) {
  controller.currentUser = allProfiles[userName]
  controller.loggedIn = true;
  buildNewForm();
  form.removeEventListener('submit', validateUser);
  form.addEventListener('submit', logOutUser);
  sessionStorage.logged = JSON.stringify(controller);
}

function buildNewForm() {
  var proPic = document.createElement('img');
  proPic.style.float = 'left';
  proPic.style.height = '100px';
  proPic.style.width = '100px';
  proPic.style.borderRadius = '100px';
  proPic.setAttribute('src', '../img/dragons.jpg');

  var oldButton = form.getElementsByTagName('button')[0];
  oldButton.innerHTML = 'Log Out';
  while (form.hasChildNodes()) {
    form.removeChild(form.lastChild);
  }
  form.appendChild(proPic);
  form.appendChild(oldButton);
}

function validateUser(e) {
  e.preventDefault();
  var userName = event.target.user.value;
  var passWord = event.target.password.value;

  (allProfiles[userName] != undefined && allProfiles[userName].passWord === passWord) ? valid(userName) : invalid();
}

function logOutUser(e) {
  e.preventDefault();
  controller.loggedIn = false;
  controller.currentUser = undefined;
  while (form.hasChildNodes()) {
    form.removeChild(form.lastChild);
  }
  form.innerHTML = oldForm;
  removeLogOutHandler();
  sessionStorage.clear();
  logInUser();
}

function removeLogOutHandler() {
  form.removeEventListener('submit', logOutUser);
}

function logInUser() {
  form.addEventListener('submit', validateUser);
}

logInUser();

if(sessionStorage.logged != undefined) {
  valid(JSON.parse(sessionStorage.logged).currentUser);
}
