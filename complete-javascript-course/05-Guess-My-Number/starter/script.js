'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let maxScore = 0;
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value); // when we click the btn, it will print what inside the box of guessing (the upper text input of where we choose the numbers)
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // if we didnt write any input
    //document.querySelector('.message').textContent = 'No Number!🎲';
    setText('.message', 'No Number!🎲');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = 'Correct Number🎯';
    setText('.message', 'Correct Number🎯');
    maxScore = maxScore < score ? score : maxScore; // updating the maxScore according to all games.
    // document.querySelector('.label-highscore').textContent =
    //  ' 🥇 Highscore: ' + maxScore;
    setText('.label-highscore', ' 🥇 Highscore: ' + maxScore);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess != secretNumber) {
    if (score <= 0) {
      //document.querySelector('.message').textContent = 'You lost the game';
      setText('.message', 'You lost the game');
    } else {
      score--;
      // document.querySelector('.message').textContent =
      //  guess > secretNumber ? 'Too high 📝' : 'Too low 📝';
      setText('.message', guess > secretNumber ? 'Too high 📝' : 'Too low 📝');
      //document.querySelector('.label-score').textContent = '💯 Score: ' + score;
      setText('.label-score', '💯 Score: ' + score);
    }
  }
  // else {
  //   if (score <= 0) {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //   } else {
  //     score--;
  //     document.querySelector('.message').textContent = 'Too high 📝';
  //     document.querySelector('.label-score').textContent = '💯 Score: ' + score;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.number').textContent = secretNumber;
  score = 20;
  //document.querySelector('.number').textContent = '?';
  setText('.number', '?');
  //document.querySelector('.label-score').textContent = '💯 Score: ' + score;
  setText('.label-score', '💯 Score: ' + score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.guess').value = '';
  setText('.guess', '');
});
const setText = function (src, message) {
  document.querySelector(src).textContent = message;
};
