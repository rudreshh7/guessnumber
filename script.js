'use strict';
/*
document.querySelector('.message').textContent = "🎉Correct  Number"
    // We will change two numbers

document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 10;

// We will now give value to the project
document.querySelector('.guess').value = 23;
*/


const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
// We will add an event handler
document.querySelector('.check').addEventListener('click', function() {
    //  value is string , we will convert it into number
    const guess = Number(document.querySelector('.guess').value);
    // we will check type of 
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = '🍎 No Number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '😍 You Guess It Right';

        score++;
        document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
        score--;
        document.querySelector('.message').textContent = 'Too Low📉';
        document.querySelector('.score').textContent = score;

    } else if (guess > secretNumber) {
        score--;
        document.querySelector('.message').textContent = "Too High📈";

        // this is what are like 


        document.querySelector('.score').textContent = score;
    }

})