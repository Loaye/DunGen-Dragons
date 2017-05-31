'use strict';

var profileForm = document.getElementById('new profile');
var allProfiles;

function packagePros() {
  localStorage.allProfiles = JSON.stringify(allProfiles);
}

function unPackPros() {
  allProfiles = JSON.parse(localStorage.allProfiles);
}

(localStorage.allProfiles === undefined) ? allProfiles = {} : unPackPros();

function Profile(userName, passWord, firstName, lastName, email) {
  this.userName = userName;
  this.passWord = passWord;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.characters = [];
  allProfiles[userName] = this;
  document.location.url = '..home/home.url';
  packagePros();
}

function profileSubmit(e) {
  e.preventDefault();
  var userName = event.target.user.value;
  var passWord = event.target.pass.value;
  var firstName = event.target.first.value;
  var lastName = event.target.last.value;
  var email = event.target.email.value;
  (allProfiles[userName] === undefined) ? new Profile(userName, passWord, firstName, lastName, email) : alert('That username is already in use!')
  profileForm.reset();
}
