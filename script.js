console.log("Welcome to Rock, Paper, Scissors!");

function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * computerChoice.length);
  console.log(`Computer choice: ${computerChoice[randomIndex]}`);
  return computerChoice[randomIndex];
}

function setupHumanChoice() {
    const rockbutton = document.querySelector("#rock");
    const paperbutton = document.querySelector("#paper");
    const scissorsbutton = document.querySelector("#scissors");

    rockbutton.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
    paperbutton.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
    scissorsbutton.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        console.log(`You win! ${humanSelection} beats ${computerSelection}`);
    } else {
        console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
    }
}

// Initialize button listeners
setupHumanChoice();