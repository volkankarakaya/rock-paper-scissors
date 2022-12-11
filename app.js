// get coumputer choice
function getComputerSelection() {
  const options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random() * options.length)];
  return choice;
  // console.log(choice)
}

// get user choice and make it case insensitive
function getPlayerSelection() {
  let playerSelection = prompt("Enter your selection: ", "");
  playerSelection = playerSelection.toLowerCase();
  return playerSelection;
}

// console.log(playerSelection)

// compare user input and computer's choice

function playRound() {
  let computerSelection = getComputerSelection();
  let playerSelection = getPlayerSelection();
  if (computerSelection === playerSelection) {
    return "draw!";
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") || // all scenarios that computer win
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return `You lose ${computerSelection} beats ${playerSelection}!`;
  } else {
    return `You won! ${playerSelection} beats ${computerSelection}!`;
  }
}

// playRound()
// console.log(playRound());

// Paper wins against rock
// rock wins against scissors
// scissors wins against paper

// keep score of 5 round, return user win if score is bigger else user lose

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (i = 0; i < 5; i++) {
    result = playRound().substring(0, 8);
    console.log(result)

    if (result === "draw!") {
      
    } else if (result === "You lose") {
      computerScore = computerScore + 1;
    } else {
      playerScore = playerScore + 1;
    }
    console.log(`computer score is ${computerScore}, player score is ${playerScore}.`)
  
    }
    if (playerScore === computerScore) {
        return "Game Draw!";
      } else if (playerScore > computerScore) {
        return "Player Won!";
      } else {
        return "Computer Won!";
  }
  console.log(result)
}

console.log(game())