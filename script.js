let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    const choices = [`rock`, `paper`, `scissors`];
    return choice = choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log(`The result is a tie! You both chose ${playerSelection}. Score: ${playerScore} VS. ${computerScore}`);
    } else if (
        playerSelection == `rock` && computerSelection == `scissors` ||
        playerSelection == `paper` && computerSelection == `rock` ||
        playerSelection == `scissors` && computerSelection == `paper`
    ) {
        playerScore = playerScore + 1;
        console.log(`You've won! ${playerSelection} beats ${computerSelection}. Score: ${playerScore} VS. ${computerScore}`);
    } else {
        computerScore = computerScore + 1;
        console.log(`You've lost this round! ${computerSelection} beats ${playerSelection}. Score: ${playerScore} VS. ${computerScore}`);
    }
}

for (let game = 1; game <= 5; game++) {
    let games = game;
    console.log(`Running game ${games}`);
    function playGame() {
        const computerSelection = getComputerChoice();
        const playerSelection = (prompt(`Rock, paper, scissors?`));
        playRound(playerSelection, computerSelection);
    }
    playGame();
}

if (playerScore === computerScore) {
    console.log(`Phew! That was a close one. A tie.`);
} else if (playerScore > computerScore) {
    console.log(`Yay!! You've beaten the computer!`);
} else {
    console.log(`Oh no, you've lost! This is the end of humanity, the computers are taking over!`);
}