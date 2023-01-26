const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return Math.floor(Math.random() * options.length);
}
