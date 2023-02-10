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

  const scoreMessage = document.querySelector(".score-board__message");

  if (computerScore < 5 && playerScore < 5) {
    game(result);
    scoreMessage.textContent = result;
  }

  // show alert
  if (computerScore === 5 || playerScore === 5) {
    endGameModal();
  }
});

function endGameModal() {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const modal = document.createElement("div");
  modal.classList.add("modal");

  let gameResult = "";
  if (computerScore === 5) {
    gameResult = "You lose -_-";
  } else if (playerScore === 5) {
    gameResult = "YOU WIN!";
  }

  const gameResultText = document.createElement("div");
  gameResultText.classList.add("game-result-text");
  gameResultText.textContent = gameResult;

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close-modal-btn");
  closeBtn.textContent = "New game";

  const scoreBoard = document.querySelector(".score-board");

  scoreBoard.appendChild(overlay);
  document.querySelector(".overlay").style.display = "block";
  overlay.appendChild(modal);
  modal.appendChild(gameResultText);
  modal.appendChild(closeBtn);

  closeBtn.addEventListener("click", () => newGame());
}

function newGame() {
  document.querySelector(".overlay").remove();
  // document.querySelector(".overlay").style.display = "none";

  playerScore = 0;
  computerScore = 0;
  updateScoreBoard();
  const scoreMessage = document.querySelector(".score-board__message");
  scoreMessage.textContent = "";
}

function showSelections(playerSelection, computerSelection) {
  // player
  let playerSelectionImg = document.createElement("img");
  playerSelectionImg.src = `./images/${playerSelection}.png`;
  playerSelectionImg.classList.add("player-selection__img");

  let playerScoreEl = document.querySelector(".player-selection");

  if (playerScoreEl.hasChildNodes()) {
    let toRemove = playerScoreEl.querySelector(".player-selection__img");
    toRemove.remove();
  }
  playerScoreEl.appendChild(playerSelectionImg);

  //computer
  let computerSelectionImg = document.createElement("img");
  computerSelectionImg.src = `./images/${computerSelection}.png`;
  computerSelectionImg.classList.add("computer-selection__img");

  let computerScoreEl = document.querySelector(".computer-selection");

  if (computerScoreEl.hasChildNodes()) {
    let toRemove = computerScoreEl.querySelector(".computer-selection__img");
    toRemove.remove();
  }

  computerScoreEl.appendChild(computerSelectionImg);
}

function game(result) {
  if (result.includes("YOU win!")) {
    playerScore++;
  }

  if (result.includes("You lose!")) {
    computerScore++;
  }

  updateScoreBoard();
}

function updateScoreBoard() {
  let playerScoreEl = document.querySelector(".score-board__item-player-score");
  playerScoreEl.textContent = `Player: ${playerScore}`;

  let computerScoreEl = document.querySelector(
    ".score-board__item-computer-score"
  );
  computerScoreEl.textContent = `Computer: ${computerScore}`;
}
