function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {
        return "scissors"
    }
}


function playRound(playerSelection, computerSelection) {
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    if (playerSelectionLowerCase == computerSelection) {
        return "Draw!"
    } else if (playerSelectionLowerCase == "rock" && computerSelection == "scissors"){
        return "You win!"
    } else if (playerSelectionLowerCase == "paper" && computerSelection == "rock"){
        return "You win!"
    }else if (playerSelectionLowerCase == "scissors" && computerSelection == "paper"){
        return "You win!"
    }else {
        return "You looose!"
    }
  }
   

let test = getComputerChoice()

console.log(playRound("SCISSORS", test));
console.log(playRound("Rock", test));
console.log(playRound("paper", test));