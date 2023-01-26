const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

let win = "YOU win!",
  lose = "You lose!",
  tie = "Tie game!";

function playRound(computerSelection, playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection === "rock") {
    if (playerSelection === "paper") {
      return `${win} Paper beats rock.`;
    } else if (playerSelection === "scissors") {
      return `${lose} Rock beats scissors`;
    } else {
      return tie;
    }
  }

  if (computerSelection === "paper") {
    if (playerSelection === "scissors") {
      return `${win} Scissors beats paper.`;
    } else if (playerSelection === "rock") {
      return `${lose} Paper beats rock`;
    } else {
      return tie;
    }
  }

  if (computerSelection === "scissors") {
    if (playerSelection === "rock") {
      return `${win} Rock beats scissors.`;
    } else if (playerSelection === "paper") {
      return `${lose} Scissors beats paper.`;
    } else {
      return tie;
    }
  }
}

function game() {
  let computerScore = 0,
    playerScore = 0;

  while (computerScore + playerScore < 5) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Enter your input. Rock, paper or scissors?");
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
