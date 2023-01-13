'use strict';
//  select elements
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const imgDice = document.querySelector('.dice');

//***Player 1***

const scoreEl0 = document.querySelector('#score--0');

//***Player 2***

const scoreEl1 = document.querySelector('#score--1');

// initialization
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
const currentScore = 0;

const activePlayer = 0;

// functions
const rollDice = function () {
  const randomNum = Math.random();
  const dice = Math.ceil(randomNum !== 0 ? randomNum : randomNum + 0.1) * 6;
  if (dice !== 1) {
    imgDice.src = `dice-${dice}.png`;
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
  }
};
