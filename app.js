const buttons = document.querySelectorAll(".btn");
let playerSelectionText = document.getElementById("player-selection");
let playerScoreText = document.getElementById("player-score");
let computerSelectionText = document.getElementById("computer-selection");
let computerScoreText = document.getElementById("computer-score");

let announcement = document.querySelector("#notification");
let restartBtn = document.getElementById("restart-btn");

buttons.forEach((btn) => btn.addEventListener("click", getPlayerChoice));

// get coumputer choice
const options = [
  { choice: "Rock", value: 0 },
  { choice: "Paper", value: 1 },
  { choice: "Scissors", value: 2 },
];
let playerScore = 0;
let computerScore = 0;

let computerSelection;
let playerSelection;

// console.log(computerSelection.value, playerSelection)

function getComputerSelection() {
  let choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

// get user choice and make it case insensitive
// function getPlayerSelection() {
//   let playerSelection = prompt("Enter your selection: ", "");
//   return playerSelection;
// }

function playRound(playerSelection, computerSelection) {
  const playerWinCombo = ["0-2", "1-0", "2-1"];
  let roundWinCombo = `${playerSelection}-${computerSelection.value}`;

  playerScoreText.innerText = playerScore;
  computerScoreText.innerText = computerScore;
  playerSelectionText.innerHTML = options[playerSelection].choice;
  computerSelectionText.innerHTML = computerSelection.choice;

  if (playerSelection === computerSelection.value) {
    playerScore++;
    computerScore++;
    playerScoreText.innerText = playerScore;
    computerScoreText.innerText = computerScore;
    announcement.innerText = `Tie Game! ${options[playerSelection].choice} and ${computerSelection.choice}`
  } else if (playerWinCombo.includes(roundWinCombo)) {
    playerScore++;
    playerScoreText.innerText = playerScore;
    announcement.innerText = `You Win! ${options[playerSelection].choice} beats ${computerSelection.choice}`
  } else {
    computerScore++;
    computerScoreText.innerText = computerScore;
    announcement.innerText = `You Lose! ${computerSelection.choice} beats ${options[playerSelection].choice}`
  }

  checkWinner();
}

// keep score of 5 round, return user win if score is bigger else user lose

// function playGame() {
//   while (playerScore < 5 && computerScore < 5) {
//     playRound(getPlayerSelection(), getComputerSelection());
//     // console.log(playerScore,computerScore)
//   }
// }

function getPlayerChoice(e) {
  playerSelection = +e.target.id;
  let computerSelection = getComputerSelection();
  playRound(playerSelection, computerSelection);
}

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === computerScore) {
      let para = document.createElement("p");
      para.textContent = "Game is tie!";
      announcement.appendChild(para);
    } else {
      announcement.textContent =
        playerScore > computerScore
          ? "Player has won the game!"
          : "computer has won the game!";
    }

    buttons.forEach((btn) => btn.removeEventListener("click", getPlayerChoice));
  }
}

restartBtn.addEventListener("click", function () {
  location.reload();
});

const messages = [
  { message: "You Win", color: "green" },
  { message: "You Lose", color: "red" },
  { message: "Tie Game", color: "blue" },
];
