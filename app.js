var hidden = document.getElementsByClassName('hidden master')[0];
var menu = document.getElementsByClassName('header menu')[0];

menu.addEventListener('click', function() {
  if (hidden.style.visibility === 'hidden') {
    hidden.style.visibility = 'visible';
  } else {
    hidden.style.visibility = 'hidden';
  }
});
