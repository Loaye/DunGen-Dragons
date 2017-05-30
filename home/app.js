'use strict';

var dropdown = document.getElementsByClassName('hidden master')[0];
var menu = document.getElementsByClassName('menu')[0];
var login = document.getElementsByClassName('login')[0];
var gear = document.getElementsByTagName('img')[1];

function toggle(element) {
  return function() {
    if(element.style.display === 'block') {
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  };
}

menu.addEventListener('click', toggle(dropdown));
gear.addEventListener('click', toggle(login));
