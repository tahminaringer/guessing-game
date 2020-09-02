'use strict'

//console.log('js is loaded');

var name = prompt('What is your first name?');
       
alert('Nice to meet you ' + name + '!');
//console.log(name);
//console.log("Hello" + name);

var ready = prompt('Do you want to play a game?');

//console.log(ready);

if (ready.toUpperCase() === 'YES') {
    var question1 = prompt('Do you you like puppies?');

switch (question1) {
    case 'yes':
    alert('puppies are the cutest!');
    break;

    case 'no':
    alert(question1 + '?!' + ' Puppies are the best!');
    }
} 

ready = prompt('Do you want to continue?');

//console.log(ready);

if (ready.toLowerCase() === 'yes') {
    alert('Hurray!');
    var question2 = prompt('Is pizza your favorite food?');

    if (question2.toLowerCase() === 'yes') {
        alert('Me too!')
        var question3 = prompt('Is Margarita your favorite pizza?');
        
        if (question3.toLowerCase() === 'yes') {
        alert('I like Margarita too!');
        }
        else if(question3 === 'no') {
            alert('We do not agree!');
        }
    }
    else if(question2 === 'no'){
        alert('I suggest you try it again!');
    }   

    var question4 = prompt('Am I from Montana?');

    if (question4.toUpperCase() === 'YES') {
        alert('Correct!  ' + name + ', ' + 'I grew grew up in a small town called Joliet.');
    }
    else if(question4.toUpperCase() === 'NO'){
        alert('Actually, I did grow up in Montana!');
    }

    var question5 = prompt('Do I love flowers?');

    if (question5.toLowerCase() === 'yes') {
        alert('Sure thing ' + name + ',' + ' I love designing beautiful things with flowers!');
    }
    else if(question5.toLowerCase() === 'no'){
        alert('Flowers are one of my favorite things and I love making cool things with them!');
    }
}
else if(ready.toLowerCase() === 'no'){
    alert('Good bye ' + name)
}
    
    alert('Thank you for playing' + name + 'I hope you enjoyed getting to know me better');
