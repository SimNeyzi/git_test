const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

let computerSelection = getComputerChoice();
let playerSelection = "rock";

function play(computerSelection, playerSelection) {
  if (computerSelection === "rock") {
    if (playerSelection === "paper") {
      console.log("YOU win! Paper beats rock.");
    } else if (playerSelection === "scissors") {
      console.log("You lose! Rock beats scissors");
    } else {
      console.log("TIGHT! Another game?");
    }
  }

  if (computerSelection === "paper") {
    if (playerSelection === "scissors") {
      console.log("YOU win! Scissors beats paper.");
    } else if (playerSelection === "rock") {
      console.log("You lose! Paper beats rock");
    } else {
      console.log("TIGHT! Another game?");
    }
  }

  if (computerSelection === "scissors") {
    if (playerSelection === "rock") {
      console.log("YOU win! Rock beats scissors.");
    } else if (playerSelection === "paper") {
      console.log("You lose! Scissors beats paper");
    } else {
      console.log("TIGHT! Another game?");
    }
  }
}

console.log("hey");
play(computerSelection, playerSelection);
