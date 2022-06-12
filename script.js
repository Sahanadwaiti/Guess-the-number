'use strict';

let secretNumber = Math.trunc(Math.random()*20+1);
let score = 20;
let highScore = 0;

console.log(secretNumber);

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('No Number found..!');
    } else if(guess === secretNumber) {
        displayMessage('Correct');
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor  = '#516B17';
            if(score> highScore){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
            
    }
    else if ( guess !== secretNumber) {
        if(score > 1){
            displayMessage( (guess > secretNumber) ? 'High' : 'Low' );
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('You lost the game...');
        }
    }
document.querySelector('.again').addEventListener('click', function (){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20+1);
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';


})

});

