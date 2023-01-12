'use strict';
// DOM Element Selections
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnAgain = document.querySelector('.btn--new');
const diceUI = document.querySelector('.dice');
const playerOneName = document.querySelector('#name--0');
const playerTwoName = document.querySelector('#name--1');
const playerOneTotalScore = document.querySelector('#score--0');
const playerOneCurrentScore = document.querySelector('#current--0');
const playerTwoTotalScore = document.querySelector('#score--1');
const playerTwoCurrentScore = document.querySelector('#current--1');
//


let score = [0,0];
let totalScore = [0,0];
let activePlayer = 0; // switching between players.
let game = true; // for preventing buttons to keep active if there is a winner.
const activeSwitcher = () => {
    document.querySelector(`.player--${activePlayer}`).classList.contains('player--active') ?    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active') :    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
}

const playerSwitcher = function() {

  activeSwitcher();
    document.querySelector(`#current--${activePlayer}`).textContent = score[activePlayer] = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
activeSwitcher();
    // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
}

const rollHandler = function() {
    if(game) {

        let dice = Math.round(Math.random() * 5) + 1;
        diceUI.src =`dice-${dice}.png`

        if(dice === 1) {

            playerSwitcher(); // For a Cleaner CODE ..


            // document.querySelector(`#current--${activePlayer}`).textContent = score[activePlayer] = 0;
            // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        }

        else {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        document.querySelector(`#current--${activePlayer}`).textContent = score[activePlayer] += dice;
        }
    }

}
const holdHandler = function() {

    if(game) {
        document.querySelector(`#score--${activePlayer}`).textContent = totalScore[activePlayer]+= score[activePlayer];

        if(totalScore[activePlayer] >= 30) {
            game = false;
            document.querySelector(`#name--${activePlayer}`).textContent = 'winner !'.toUpperCase();
            }

        else {
            playerSwitcher(); // For a Cleaner CODE ..
        }


    // document.querySelector(`#current--${activePlayer}`).textContent = score[activePlayer] = 0;
    // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

}

}
const restGame = () => {
    game = true;
    score = [0,0] ;
    totalScore = [0,0]
    playerOneCurrentScore.textContent = playerOneTotalScore.textContent = playerTwoCurrentScore.textContent = playerTwoTotalScore.textContent = 0;
    playerOneName.textContent = 'PLAYER 1';
    playerTwoName.textContent = 'PLAYER 2';
    document.querySelector(`.player--0`).classList.remove('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
}

btnRoll.addEventListener('click', rollHandler);
btnHold.addEventListener('click', holdHandler);
btnAgain.addEventListener('click',restGame)
