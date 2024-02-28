let computerScore = 0;
let playerScore = 0;
for (let i = 1; i <= 5; i++) {
    let games = i;
    console.log(`Running game ${games}`);
    function playGame() {
        const computerSelection = getComputerChoice();
        const playerSelection = (prompt(`Rock, paper, scissors?`));

        function getComputerChoice() {
            const choices = [`rock`, `paper`, `scissors`];
            return choice = choices[Math.floor(Math.random() * choices.length)];
        }

        function playRound(playerSelection, computerSelection) {
            if (playerSelection == computerSelection) {
                console.log(`The result is a tie! Score: ${playerScore} VS. ${computerScore}`);
            } else if (
                playerSelection == `rock` && computerSelection == `scissors` ||
                playerSelection == `paper` && computerSelection == `rock` ||
                playerSelection == `scissors` && computerSelection == `paper`
            ) {
                playerScore = playerScore + 1;
                console.log(`You've won! Score: ${playerScore} VS. ${computerScore}`);
            } else {
                computerScore = computerScore + 1;
                console.log(`You've lost this round! Score: ${playerScore} VS. ${computerScore}`);
            }
        }
        playRound(playerSelection, computerSelection);
    }
    playGame();
}
if (playerScore === computerScore) {
    console.log(`Phew! That was a close one. A tie.`);
} if (playerScore > computerScore) {
    console.log(`Yay!! You've beaten the computer!`);
} else {
    console.log(`Oh no, you've lost! This is the end of humanity, the computers are taking over!`);
}