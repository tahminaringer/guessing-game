'use strict'

var totalCorrectAnswers = 0;

//console.log('js is loaded');

var name = prompt('What is your first name?');
       
alert('Nice to meet you ' + name + '!');
//console.log(name);
//console.log("Hello" + name);


//console.log(ready);
var question1 = "Do you like puppies?";
var question2 = "Is pizza your favorite food?";
var question3 = "Is Magarita your favorite pizza?";
var question4 = "Am I from Montana?";
var question5 = "Do I love flowers?";

// remember that question == var question1-5

function aboutMe(question,alertYes,alertNo) {
  question = prompt(question).toLowerCase();
  if(question === 'yes') {
    alert(alertYes);
    // console.log(alertYes);
  } else {
    alert(alertNo);
    // console.log(alertNo);
  }
}

aboutMe(question1,"Puppies are the cutest!","What?!");
aboutMe(question2,"Me too!","We do not agree");
aboutMe(question3, "I like Magarita too!","That's silly!");
aboutMe(question4,"I am from Montana!","Actually, I grew up in Montana");
aboutMe(question5, "Yes, dahlias are my favorite!","What's wrong with you?!");



    
alert('Thank you for playing ' + name + 'I hope you enjoyed getting to know me better');

// question 6  
function numberGame(number,max) {
  for (var i = 0; i < max; i = i + 1){
    var userGuess = prompt('Guess a number between 1-50');
    if(userGuess === number){
      alert('great job ' + name + "! " + 'You are correct!');
      totalCorrectAnswers++;
      break;
    } else if(userGuess < number){
      alert('Bummer ' + name + ', ' + 'you guessed too low!');
    } else if (userGuess > number){
      alert('Bummer ' + name + ', ' + 'you guessed too high!');
    }
    if(i === max){
      alert(name + 'the correct answer is ' + number);
    }
  }
}
    var question6 = prompt('Want to play another game?');
    var answer = ('5');
    numberGame(answer,4);


// question 7
var answer7 = ['flowers', 'nature', 'family', 'friends', 'gardening', 'hiking'];

function aboutMeGame(answer,max) {
    for (var i = 0; i < max; i++) {
        var userGuess7 = prompt('Name one of my favorite things?');
        console.log(answer[i]);
        if (answer.includes(userGuess7.toLowerCase())) {
            alert('You guessed right!');
            totalCorrectAnswers++;
            break;
        } else if(i === 5 && !answer.includes(userGuess7.toLowerCase())) {
            alert('You guessed wrong, but here are the right answers! ' + answer);
        } else {
            alert('Guess again');
        }
    }
}

aboutMeGame(answer7,6);





alert('Congratulations ' + name + ' you got the following questions correct! ' + totalCorrectAnswers);

/* var answer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(var i = 1; i <= 10; i++)
    var printNumbers = prseInt(prompt); */