//Define variables for scores and game state
let computerScore = 0;
let playerScore = 0;
let gamesPlayed = 0;

// Select DOM elements
const gameTitle = document.querySelector(".game-title");
const pScore = document.querySelector("#pScore");
const cScore = document.querySelector("#cScore");
const gameCounter = document.querySelector("#gameCounter");
const finalText = document.querySelector("#finalText");
const restartItem = document.querySelector(".overlay-item");
const restartButton = document.querySelector("#restart");
const buttonWrapper = document.querySelector(".button-wrapper");
const statistics = document.querySelector(".stats-wrapper");
const startBtn = document.querySelector("#startBtn");
const startScreen = document.querySelector("#startScreen");
const quantity = document.querySelector("#quantity");
const gameAmountText = document.querySelector(".game-amount");

//Initial load and game reset
function gameReset() {
  computerScore = 0;
  playerScore = 0;
  gamesPlayed = 0;
  updateScoreBoard();
  gameTitle.textContent = "Let's play a game of 🪨 📄 ✂️";
  restartItem.classList.add("hidden");
  buttonWrapper.classList.add("hidden");
  statistics.classList.add("hidden");
  startScreen.classList.remove("hidden");
}
gameReset();

function amountOfGames() {
  buttonWrapper.classList.remove("hidden");
  statistics.classList.remove("hidden");
  startScreen.classList.add("hidden");
  gameAmountText.textContent = quantity.value;
  return quantity.value;
}
startBtn.addEventListener("click", amountOfGames);

//Scoreboard update
function updateScoreBoard() {
  pScore.textContent = playerScore;
  cScore.textContent = computerScore;
  gameCounter.textContent = gamesPlayed;
}

//Random choice for computer
function getComputerChoice() {
  const choices = [`🪨`, `📄`, `✂️`];
  return (choice = choices[Math.floor(Math.random() * choices.length)]);
}

// Object mapping button IDs to icons
const iconMap = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂️",
};
// Make the buttons interactive and run a game
const buttons = document.querySelectorAll(".game-button.is-player");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const playerChoice = iconMap[this.id]; // Get icon based on button ID
    playRound(playerChoice, getComputerChoice());
  });
});

//Play a single round of 🪨 📄 ✂️
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    gameTitle.textContent = `The result is a tie! You both chose ${playerSelection}.`;
  } else if (
    (playerSelection == `🪨` && computerSelection == `✂️`) ||
    (playerSelection == `📄` && computerSelection == `🪨`) ||
    (playerSelection == `✂️` && computerSelection == `📄`)
  ) {
    playerScore = playerScore + 1;
    gameTitle.textContent = `You've won! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore = computerScore + 1;
    gameTitle.textContent = `You've lost this round! ${computerSelection} beats ${playerSelection}.`;
  }
  gamesPlayed = gamesPlayed + 1;
  gameCounter.textContent = gamesPlayed;
  console.log(quantity.value);
  console.log(gamesPlayed);
  if (gamesPlayed === Number(quantity.value)) {
    winner(playerScore, computerScore);
  }
  updateScoreBoard();
}

//Display final score after 5 games
function winner(playerScore, computerScore) {
  restartItem.classList.remove("hidden");
  buttonWrapper.classList.add("hidden");
  if (playerScore === computerScore) {
    finalText.textContent = `Phew! That was a close one. A tie.`;
  } else if (playerScore > computerScore) {
    finalText.textContent = `Yay!! You've beaten the computer!`;
  } else {
    finalText.textContent = `Oh no, you've lost! This is the end of humanity, the computers are taking over!`;
  }
}

restartButton.addEventListener("click", gameReset);
