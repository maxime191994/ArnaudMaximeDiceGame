'use strict';
const player0El = document.querySelector('.player1');
const player1El = document.querySelector('.player2');
const name01 = document.querySelector('#name1');
const name02 = document.querySelector('#name2');
const inputText = document.getElementById('inputtext');
const score0El = document.querySelector('#score1');
const score1El = document.getElementById('score2');
const current0El = document.getElementById('roundscore1');
const current1El = document.getElementById('roundscore2');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btnnew');
const btnRoll = document.querySelector('.btnroll');
const btnHold = document.querySelector('.btnhold');
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');

let currentScore = 0;
const scores = [12, 45];
let activePlayer = 0;
let playing = true;


btnNew.addEventListener('click', function() {
  var newPlayerName1 = prompt("Enter a new player 1 name:");
  if (newPlayerName1) {
  name01.textContent = newPlayerName1;
      }
  var newPlayerName2 = prompt("Enter a new player 2 name:");
  if (newPlayerName2) {
    name02.textContent = newPlayerName2;
        }
    });


const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`roundscore${activePlayer + 1}`).textContent = '0';
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player1-active');
  player1El.classList.toggle('player1-active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.remove('hidden');
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`roundscore${activePlayer + 1}`).textContent = currentScore.toString();
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score${activePlayer + 1}`).textContent = scores[activePlayer].toString();
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document.getElementById(`score${activePlayer + 1}`).textContent = 'Win!';
      switchPlayer();
      document.getElementById(`score${activePlayer + 1}`).textContent = 'Lost!';
      document.querySelector(`.player${activePlayer + 1}`).classList.add('player1-winner');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  document.querySelector(`.player${activePlayer + 1}`).classList.remove('player1-winner');
  activePlayer = 0;
  document.querySelector('.player1').classList.add('player1-active');
  document.querySelector('.player2').classList.remove('player1-active');
  scores[0] = 0;
  scores[1] = 0;
  document.getElementById('score1').textContent = '0';
  document.getElementById('score2').textContent = '0';
});
