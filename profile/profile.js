'use strict';

var controller {
  loggedIn : false;
  currentUser : undefined;
}

var allProfiles = {}

var form = document.getElementsByClassName('login')[0];



function invalid() {
  alert('Invalid user name or password')
  form.getElementsByTagName('input').forEach((el, ind, formArr) => formArr[ind].style.outline = '2px solid red');
}


function valid(userName) {
  controller.currentUser = allProfiles[userName]
  controller.loggedIn = true;
}

function validateUser(e) {
  e.preventDefault();
  var userName = target.event.user.value;
  var passWord = target.event.passWord.value;

  (allProfiles[userName] != undefined && allProfiles[userName].passWord === passWord) ? valid() : invalid();

}
