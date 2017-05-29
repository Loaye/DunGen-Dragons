'use strict';

var dropdown = document.getElementsByClassName('hidden master')[0];
var menu = document.getElementsByClassName('menu')[0];

function toggle() {
  if(dropdown.style.display === 'none') {
    dropdown.style.display = 'inline';
  } else {
    dropdown.style.display = 'none';
  }
}

menu.addEventListener('click', toggle);
