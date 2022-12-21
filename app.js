// get coumputer choice
const options = [
  { choice: "Rock", value: 0 },
  { choice: "Paper", value: 1 },
  { choice: "Scissors", value: 2 },
];
let playerScore = 0;
let computerScore = 0;

let computerSelection
let playerSelection

// console.log(computerSelection.value, playerSelection)

function getComputerSelection() {
  let choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

// get user choice and make it case insensitive
function getPlayerSelection() {
  let playerSelection = prompt("Enter your selection: ", "");
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  const playerWinCombo = ["0-2", "1-0", "2-1"];
  let roundWinCombo = `${playerSelection}-${computerSelection.value}`;

  if (playerSelection === computerSelection.value) {
    playerScore++;
    computerScore++;
  } else if (playerWinCombo.includes(roundWinCombo)) {
    playerScore++;
  } else {
    computerScore++;
  }
  console.log(playerScore,computerScore)
  if(playerScore===5 || computerScore===5){
    if(playerScore===computerScore){
      console.log('game is tie!')
    }else{
      console.log((playerScore>computerScore)?'player won':'computer won')
    }
  }
}

// keep score of 5 round, return user win if score is bigger else user lose

function playGame(){
  while(playerScore<5 && computerScore<5){
    playRound(getPlayerSelection(),getComputerSelection())
    // console.log(playerScore,computerScore)
  }

  
}

playGame()