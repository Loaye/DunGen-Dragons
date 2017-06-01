'use strict';

// [Lawful(0), Neutral(1), Chaotic(2)]
var firstAlign = [0, 0, 0];

// [Good(0), Neutral(1), Evil(2)]]
var secondAlign = [0, 0, 0];

var questionText = document.getElementById('question');
var answerText = document.getElementById('answers');

function Question(question, answers, firstVal, secondVal){
  this.question = question;
  this.answers = answers;
  this.firstVal = firstVal;
  this.secondVal = secondVal;
  qArr.push(this);
}

var qArr = [];

new Question('Rules are...', ['1. Necessary and must be followed to maintain order.', '2. Generally fine, but sometimes get in the way of what needs to be done.', '3. A list of suggestions for how not to live an interesting life.'], [0, 1, 2], [1, 0, 1]);

new Question('You strive for...', ['1. Dominance over others', '2. Balance in all things', '3. Peace and prosperity', '4. Nothing in particular'], [2, 1, 0, 1], [0, 1, 0, 0]);

new Question('When it comes down to it, which do you prioritize?', ['1. The community', '2. My own friends/family', '3. Myself', '4. Fun!'], [0, 1, 1, 2], [0, 0, 2, 1]);

new Question('To you, money is...', ['1. Power', '2. Good to have', '3. A means of helping others', '4. Inconsequential', '5. Flammable'], [0, 1, 0, 1, 2], [2, 0, 0, 1, 2]);

new Question('What sort of leader are you?', ['1. Fair and just', '2. Feared by all', '3. No thanks', '4. When I\'m in charge, every mission is a suicide mission!'], [0, 0, 1, 2], [0, 2, 0, 2]);

new Question('You find a bag of gold on the ground...', ['1. Try to return it to the rightful owner', '2. Donate it to a good cause', '3. Keep it for yourself', '4. Just put it back and move on', '5. Leave it, but fill the bag with venemous spiders, because why not?'], [0, 1, 2, 1, 2], [1, 0, 1, 1, 2]);

new Question('A friend of yours is arrested and all evidence points to their guilt...', ['1. Trust that the law will be fair but merciful', '2. Defend your friend any way you can, even if it means lying', '3. Share more dirt on your "friend" for a decent price'], [0, 2, 2], [1, 0, 2]);

new Question('Your hometown is besieged by bandits. You...', ['1. Take up arms and fight!', '2. Hole up in the local tavern, have a pint, and wait for this whole thing to blow over', '3. Join the bandits. You can even point out the best houses to loot!'], [0, 2, 1], [0, 1, 2]);


function displayQuestion(q) {
  questionText.innerHTML = qArr[q].question;
  answerText.innerHTML = '';

  for (var i = 0; i < qArr[q].answers.length; i++) {
    var newLi = document.createElement('li');
    newLi.setAttribute('id', i);
    newLi.innerHTML = qArr[q].answers[i];
    answerText.appendChild(newLi);
  }

  createAnswerHandler(q);
}

function createAnswerHandler(q){
  var answerLi;

  for (var i = 0; i < qArr[q].answers.length; i++){
    answerLi = document.getElementById(i);

    if (typeof window.addEventListener === 'function'){
      (function (_answerLi) {
        answerLi.addEventListener('click', function(){
          var first = qArr[q].firstVal[_answerLi.id];
          var second =qArr[q].secondVal[_answerLi.id];
          firstAlign[first]++;
          secondAlign[second]++;
          if(q < 7){
            displayQuestion(q + 1);
          } else {
            questionText.innerHTML = 'End of quiz!';
            answerText.innerHTML = '';
            scoreQuiz();
          }
        });
      })(answerLi);
    }

  }
}

function scoreQuiz(){
  var first = indexMax(firstAlign);
  var second = indexMax(secondAlign);
  var playerAlign = '';

  if(first === 1 && second === 1){
    playerAlign = 'True Neutral';
  } else {

    switch(first) {
    case 0:
      playerAlign += 'Lawful ';
      break;
    case 1:
      playerAlign += 'Neutral ';
      break;
    case 2:
      playerAlign += 'Chaotic ';
      break;
    }

    switch(second){
    case 0:
      playerAlign += 'Good';
      break;
    case 1:
      playerAlign += 'Neutral';
      break;
    case 2:
      playerAlign += 'Evil';
      break;
    }
  }
  console.log('Your alignment is ' + playerAlign + '.');
}

function indexMax(arr) {
  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }
  return maxIndex;
}

displayQuestion(0);
