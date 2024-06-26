function getComputerChoice() {
  let randomVal = Math.floor(Math.random() * 3);
  let computerChoice;
  switch (randomVal) {
      case 0:
          computerChoice = 'rock';
          break;
      case 1:
          computerChoice = 'paper';
          break;
      case 2:
          computerChoice = 'scissors';
          break;
      default:
          console.log("Must be equal to one out of the three choices");
  }
  return computerChoice;
}

function getHumanChoice() {
  let choice = prompt("Let's play a quick fun game! Write down one of the following choices below:\n'Rock', 'Paper', 'Scissors'");
  if (choice === null) {
      alert("Cancelled/Exited Game");
      return null;
  }
  return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'rock' && computerChoice === 'paper') {
      computerScore++;
      alert(`Oh no, you lost this round... Paper covers Rock\nComputer: ${computerScore} You: ${humanScore}`);
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        alert(`Yay! Rock beats Scissors!\nComputer: ${computerScore} You: ${humanScore}`);
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        alert(`Yay! Paper beats Rock!\nComputer: ${computerScore} You: ${humanScore}`);
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        alert(`Oh no, you lost this round... Scissors cut paper\nComputer: ${computerScore} You: ${humanScore}`);
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        alert(`Oh no, you lost this round... Rock crushes Scissors\nComputer: ${computerScore} You: ${humanScore}`);
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        alert(`Yay! Scissors beats Paper!\nComputer: ${computerScore} You: ${humanScore}`);
    }
  else {
    alert(`It's a draw!\nComputer: ${computerScore} You: ${humanScore}`);
  }
  }

  function playGame() {
  for (let i=0; i<5; i++) {
    const humanSelection = getHumanChoice();
    if (humanSelection === null) {
        return;
    }
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    alert(`You Win! With a score of ${humanScore} against ${computerScore}`);
  }
  else if (humanScore < computerScore) {
    alert(`The computer won with a score of ${computerScore} against your ${humanScore}. Better luck next time.`);
  }
  else {
    alert(`How crazy is it that you ended with a tie of ${humanScore} : ${computerScore}?!`);
  }
  }
  playGame();