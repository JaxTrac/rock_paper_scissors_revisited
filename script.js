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
        return 0
    } else if (playerSelectionLowerCase == "rock" && computerSelection == "scissors"){
        return 1
    } else if (playerSelectionLowerCase == "paper" && computerSelection == "rock"){
        return 1
    }else if (playerSelectionLowerCase == "scissors" && computerSelection == "paper"){
        return 1
    }else {
        return -1
    }
  }
   
function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 5; i > 0; i--) {
        let result = playRound(prompt(),getComputerChoice())
        if (result == 1) {
            scorePlayer += 1; 
        } else if (result == -1) {
            scoreComputer += 1;
        }
      }
    return "Player: " + scorePlayer + " // Computer: " + scoreComputer + "!";
}

console.log(game());