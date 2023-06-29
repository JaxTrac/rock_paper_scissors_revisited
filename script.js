let playerChoice = "";
let scorePlayer = 0;
let scoreComputer = 0;
let rounds = 5;

let rockButton = document.getElementById("Rock");
let paperButton = document.getElementById("Paper");
let scissorsButton = document.getElementById("Scissors");
let scoreboard = document.createElement("div");
let commentator = document.createElement("div");

document.body.appendChild(scoreboard);
document.body.appendChild(commentator);


rockButton.addEventListener("click", () => {
  playerChoice = "rock";
  playRound(playerChoice, getComputerChoice());
});

paperButton.addEventListener("click", () => {
  playerChoice = "paper";
  playRound(playerChoice, getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
  playerChoice = "scissors";
  playRound(playerChoice, getComputerChoice());
});

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let playerSelectionLowerCase = playerSelection.toLowerCase();
  if (playerSelectionLowerCase === computerSelection) {
    commentator.textContent = "Draw!";
  } else if (
    (playerSelectionLowerCase === "rock" && computerSelection === "scissors") ||
    (playerSelectionLowerCase === "paper" && computerSelection === "rock") ||
    (playerSelectionLowerCase === "scissors" && computerSelection === "paper")
  ) {
    commentator.textContent = "You win!";
    scorePlayer += 1;
  } else {
    commentator.textContent = "You lose!";
    scoreComputer += 1;
  }

  if (scorePlayer === rounds || scoreComputer === rounds) {
    console.log("Final Score!!! Player: " + scorePlayer + " // Computer: " + scoreComputer);
    rockButton.remove();
    paperButton.remove();
    scissorsButton.remove();
    commentator.remove();
    scoreboard.textContent = "Player: " + scorePlayer + " // Computer: " + scoreComputer;
  }
}
