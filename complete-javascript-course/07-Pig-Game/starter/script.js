'use strict';

// selecting elemets in order to use them in the code.
const player0El = document.querySelector('.player--0');

const player1El = document.querySelector('.player--1');
// # is for getting an id element from querySelector , so when we want id we put # before
const score0El = document.querySelector('#score--0');
// another way for recieving id, is this method, here we dont need # because it is already an id (this method is fast than querySelector so when we choose alot of id's we should use this method)
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');

const btnNew = document.querySelector('.btn--new');

const btnHold = document.querySelector('.btn--hold');

const current0El = document.getElementById('current--0');

const current1El = document.getElementById('current--1');
// creating a variable for the currenct score , it is let because its going to be changed during the code.
let currentScore = 0;

// variable to keep track of who's turn it is.
let activePlayer = 0;

// variable to hold the total scores, index 0 for player 0, index 1 for plater 1.
const scores = [0, 0];

// variable to let us know if the game is still on
let playing = true;

// note that we can change the variables inside, the pointer is the const -> only the reference is const , not the inner value of it.
score0El.textContent = 0;

score1El.textContent = 0;
// here we dont need .hidden, just hidden , setting the dice to invisible
diceEl.classList.add('hidden');

const resetAndUpdate = function () {
  //reseting currenct score
  currentScore = 0;
  // setting background & btn colors
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  // changing turn
  activePlayer = activePlayer === 0 ? 1 : 0;

  // toggle removes if exsist, adds if doest exsist.
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// rolling dice functionality
const randomDice = function () {
  // only if the game is still on.
  if (playing) {
    // 1. Generating a dice roll
    const generateNumber = Math.trunc(Math.random() * 6) + 1;

    // 2. displaying the dice
    diceEl.src = `dice-${generateNumber}.png`;

    diceEl.classList.remove('hidden');

    // 3. checking for rolled 1 : if true, switch to next player.
    if (generateNumber !== 1) {
      // Add dice to the currenct score
      currentScore += generateNumber;

      // setting the active player score by getting the right text content from activeplayer variable
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }

    // else switching to the next plater
    else {
      resetAndUpdate();
    }
  }
};

const holdScore = function () {
  // only if the game is still on.
  if (playing) {
    // seeting the player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // switch if currenct player didnt reach 100 points or more
    if (scores[activePlayer] < 15) {
      resetAndUpdate();
    } else {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden'); // hidding the button
      // setting the game to be over.
      playing = false;
    }
  }
};
const resetGame = function () {
  // reseting scores
  score0El.textContent = 0;
  score1El.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;

  // reseting currnets
  currentScore = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // playing is on
  playing = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  // toggle removes if exsist, adds if doest exsist.
  if (activePlayer == 0) player0El.classList.toggle('player--active');
  else if (activePlayer == 1) player1El.classList.toggle('player--active');
};
// adding an event lisiter ti the btnRoll.
btnRoll.addEventListener('click', randomDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', resetGame);
