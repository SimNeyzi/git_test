const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

let computerSelection = getComputerChoice();
let playerSelection = "RocK";

function playRound(computerSelection, playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection === "rock") {
    if (playerSelection === "paper") {
      return "YOU win! Paper beats rock.";
    } else if (playerSelection === "scissors") {
      return "You lose! Rock beats scissors";
    } else {
      return "TIGHT!";
    }
  }

  if (computerSelection === "paper") {
    if (playerSelection === "scissors") {
      return "YOU win! Scissors beats paper.";
    } else if (playerSelection === "rock") {
      return "You lose! Paper beats rock";
    } else {
      return "TIGHT!";
    }
  }

  if (computerSelection === "scissors") {
    if (playerSelection === "rock") {
      return "YOU win! Rock beats scissors.";
    } else if (playerSelection === "paper") {
      return "You lose! Scissors beats paper";
    } else {
      return "TIGHT!";
    }
  }
}

// console.log(playRound(computerSelection, playerSelection));

function game() {
  let computerScore = 0,
    playerScore = 0;
  for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("What's your thing?");
    let result = playRound(computerSelection, playerSelection);

    if (result.includes("YOU win!")) {
      playerScore++;
    } else if (result.includes("You lose!")) {
      computerScore++;
    }

    console.log(`Player: ${playerScore} - Computer: ${computerScore} `);
  }
}

game();
