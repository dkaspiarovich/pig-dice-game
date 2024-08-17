//input
const input = document.querySelector(".input");

//buttons
const buttonInput = document.querySelector(".button__input");
const buttonNewGame = document.querySelector(".button__new__game");
const buttonRoll = document.querySelector(".button__roll");
const buttonHold = document.querySelector(".button__hold");
const buttonNewPlayers = document.querySelector(".button__new__players");

//sections
const sectionPlayers = document.querySelector(".section__players");
const sectionButtons = document.querySelector(".section__buttons");
const sectionInput = document.querySelector(".section__input");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

//names
const inputName0 = document.querySelector(".input__name--0");
const inputName1 = document.querySelector(".input__name--1");
let playerName0 = document.querySelector("#player__name--0");
let playerName1 = document.querySelector("#player__name--1");

//score
const playerScore0 = document.querySelector("#player__score--0");
const playerScore1 = document.querySelector("#player__score--1");
const currentScore0 = document.querySelector("#current__score--0");
const currentScore1 = document.querySelector("#current__score--1");

//image
const image = document.querySelector(".image");

let mainScore, score, currentPlayer, playerName;

const start = function () {
  mainScore = [0, 0];
  score = 0;
  currentPlayer = 0;
  playerName = [0, 0];
  inputName0.value = " ";
  inputName1.value = " ";
};

start();

const changePlayer = function () {
  score = 0;
  document.querySelector(`#current__score--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0.classList.toggle("active__player");
  player1.classList.toggle("active__player");
};

const gameStop = function () {
  document.querySelector(`#current__score--0`).textContent = 0;
  document.querySelector(`#current__score--1`).textContent = 0;
  currentPlayer = 0;
  score = 0;
  mainScore = [0, 0];
  buttonHold.classList.add("button__disabled");
  buttonRoll.classList.add("button__disabled");
};

const clearScore = function () {
  document.querySelector(`#player__score--0`).textContent = 0;
  document.querySelector(`#player__score--1`).textContent = 0;
};

const newGame = function () {
  gameStop();
  clearScore();
  player0.classList.add("active__player");
  player1.classList.remove("active__player");
  image.classList.add("hidden");
  buttonHold.classList.remove("button__disabled");
  buttonRoll.classList.remove("button__disabled");
};

// button to start a game
buttonInput.addEventListener("click", function () {
  sectionPlayers.classList.remove("hidden");
  sectionButtons.classList.remove("hidden");
  sectionInput.classList.add("hidden");
  if (inputName0.value == " " && inputName1.value == " ") {
    playerName0.textContent = "PLAYER 1";
    playerName1.textContent = "PLAYER 2";
  } else if (inputName0.value == " " || inputName1.value == " ") {
    if (inputName0.value == " ") {
      playerName0.textContent = "player 1";
      playerName1.textContent = inputName1.value;
    }
    if (inputName1.value == " ") {
      playerName1.textContent = "player 2";
      playerName0.textContent = inputName0.value;
    }
  } else {
    playerName0.textContent = inputName0.value;
    playerName1.textContent = inputName1.value;
  }
  newGame();
});

// button new game
buttonNewGame.addEventListener("click", function () {
  newGame();
});

// button roll the dice
buttonRoll.addEventListener("click", function () {
  image.classList.remove("hidden");
  let dice = Math.floor(Math.random() * 6) + 1;
  image.src = `img/dice--${dice}.png`;
  if (dice === 1) {
    changePlayer();
  } else {
    score += dice;
    document.querySelector(`#current__score--${currentPlayer}`).textContent =
      score;
  }
});

// button hold score
buttonHold.addEventListener("click", function () {
  mainScore[currentPlayer] += score;

  if (mainScore[currentPlayer] >= 100) {
    document.querySelector(`#player__score--${currentPlayer}`).textContent =
      mainScore[currentPlayer];
    gameStop();
  } else if (mainScore[currentPlayer] < 100) {
    document.querySelector(`#player__score--${currentPlayer}`).textContent =
      mainScore[currentPlayer];
    changePlayer();
  }
});

//button new players names
buttonNewPlayers.addEventListener("click", function () {
  sectionPlayers.classList.add("hidden");
  sectionButtons.classList.add("hidden");
  sectionInput.classList.remove("hidden");
  inputName0.value = " ";
  inputName1.value = " ";
  playerName0.textContent = inputName0.value;
  playerName1.textContent = inputName1.value;
});
