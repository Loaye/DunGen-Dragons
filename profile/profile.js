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
  packagePros();
}

function profileSubmit(e) {
  e.preventDefault();
  var userName = event.target.user.value;
  var passWord = event.target.pass.value;
  var firstName = event.target.first.value;
  var lastName = event.target.last.value;
  var email = event.target.email.value;

  if (allProfiles[userName] != undefined) {
    alert('That user name is already in use');
    return;
  }
  if(event.target.pass.value !== event.target.conpass.value) {

    alert('You passwords must match.');
    return;
  } else {
    new Profile(userName, passWord, firstName, lastName, email);
    alert('Your profile has been created!');
    document.location.href = '../home/index.html';
  }
  profileForm.reset();
}

profileForm.addEventListener('submit', profileSubmit);
