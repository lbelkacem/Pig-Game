'use strict';
//  select elements
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');

const imgDice = document.querySelector('.dice');

//***Player 1***

const scoreEl0 = document.querySelector('#score--0');

//***Player 2***

const scoreEl1 = document.querySelector('#score--1');

// initialization
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;

// set a playing variable to stop the game when winning
let playing = true;

//add a hidden class to the dice image
imgDice.classList.add('hidden');

// functions
// swith player function
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
};

// roll the dice function
const rollDice = function () {
  if (playing) {
    const randomNum = Math.random();
    const dice = Math.ceil((randomNum !== 0 ? randomNum : randomNum + 0.1) * 6);
    console.log(dice);
    imgDice.classList.remove('hidden');
    imgDice.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

// hold function
const holdScore = function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      imgDice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
};

// add event listeners

btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
