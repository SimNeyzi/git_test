const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

let win = "YOU win!",
  lose = "You lose!",
  tie = "Tie game!";

let computerScore = 0,
  playerScore = 0;

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

const userInput = document.querySelector(".user-input");

userInput.addEventListener("click", (e) => {
  let computerSelection = getComputerChoice();
  let playerSelection = e.target.id;
  let result = playRound(computerSelection, playerSelection);

  showSelections(playerSelection, computerSelection);

  if (computerScore < 5 || playerScore < 5) {
    game(result);
  }
});

function showSelections(playerSelection, computerSelection) {
  let playerSelectionImg = document.createElement("img");
  playerSelectionImg.src = `./images/${playerSelection}.png`;
  playerSelectionImg.classList.add("user-input");

  let playerScoreEl = document.querySelector(".score-board");
  playerScoreEl.prepend(playerSelectionImg);
}

function game(result) {
  if (result.includes("YOU win!")) {
    playerScore++;
  } else if (result.includes("You lose!")) {
    computerScore++;
  }

  console.log(`Player: ${playerScore} - Computer: ${computerScore} `);

  let playerScoreEl = document.querySelector(".player");
  playerScoreEl.textContent = `Player: ${playerScore}`;

  let computerScoreEl = document.querySelector(".computer");
  computerScoreEl.textContent = `Computer: ${computerScore}`;
}
