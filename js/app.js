'use strict';

var totalCorrectAnswers = 0;
var name = prompt('What is your first name?');

alert('Nice to meet you ' + name + '!');

var question1 = 'Do I have identical twin boys? ';
var question2 = 'Do I love to cook!';
var question3 = 'Is spending time in nature my creative inspiration?';
var question4 = 'Am I from Montana?';
var question5 = 'Do I love flowers?';

function aboutMe(question,alertYes,alertNo) {
  question = prompt(question).toLowerCase();
  if(question === 'yes') {
    alert(alertYes);
    totalCorrectAnswers++;
  } else {
    alert(alertNo);
  }
}

aboutMe(question1,'Yes, they are 5 and magical little beings!','Actually I have 5yr old twins?');
aboutMe(question2,'Correct, cooking is one of my favorite pastimes!','Incorrect I love trying new recipes!');
aboutMe(question3, 'Correct, I love drawing inspiration from nature!','That is silly, I love nature!');
aboutMe(question4,'I am from Montana!','Actually, I grew up in Montana');
aboutMe(question5, 'Yes, dahlias are my favorite!','Of coarse I love flowers!');

alert('Thank you for playing ' + name + 'I hope you enjoyed getting to know me better');

function askUser () {
  var question6 = prompt('Want to play another game?');
  if (question6 === 'yes') {
    var answer = (5);
    numberGame(answer,4);
  } else if(question6 === 'no') {
    alert('Good bye ' + name);
    return;
  }
}
askUser();



function numberGame(number, max) {
  for (var i = 0; i < max; i = i + 1){
    var userGuess = parseInt(prompt('Guess a number between 1-50'));
    if(userGuess === number){
      alert('great job ' + name + '! ' + 'You are correct!');
      totalCorrectAnswers++;
      break;
    } else if(userGuess < number){
      alert('Bummer ' + name + ', ' + 'you guessed too low!');
    } else if (userGuess > number){
      alert('Bummer ' + name + ', ' + 'you guessed too high!');
    }
    if(i === max -1){
      alert(name + ' the correct answer is ' + number);
      break;
    }
  }
  var answer7 = ['flowers', 'nature', 'family', 'friends', 'gardening', 'hiking'];
  aboutMeGame(answer7,6);
}

function aboutMeGame(answer7,max) {
  for (var i = 0; i < max; i++) {
    var userGuess7 = prompt('Name one of my favorite things?');
    var answeredCorrect = false;
    for (var j = 0; j < answer7.length; j++) {
      if (userGuess7 === answer7[j]) {
        alert(name + 'You guessed right! ' + 'Here are all the correct answers! ' + answer7);
        totalCorrectAnswers++;
        answeredCorrect = true;
      }
    }
    if (answeredCorrect === false) {
      if (i === (max - 1)) {
        alert(name + 'You guessed wrong, but here are the right answers! ' + answer7);
      } else {
        alert('Guess again');
      }

    } else if (answeredCorrect === true) {
      break;
    }
  }
}

alert('Congratulations ' + name + ' you got the following questions correct! ' + totalCorrectAnswers);
