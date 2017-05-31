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
}

function buildNewForm() {
  var proPic = document.createElement('img');
  proPic.style.float = 'left';
  proPic.style.height = '100px'
  proPic.style.width = '100px';
  proPic.setAttribute('src', 'http://gazettereview.com/wp-content/uploads/2016/02/cosby-feature.jpg');

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

form.addEventListener('submit', validateUser);
