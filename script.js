const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let resultText = "";

  if (playerChoice === computerChoice) {
    resultText = `🤝 Draw! You both chose ${playerChoice}`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText = `🎉 You Win! ${playerChoice} beats ${computerChoice}`;
    playerScore++;
  } else {
    resultText = `💥 You Lose! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  }

  updateUI(resultText);
}

function updateUI(message) {
  document.getElementById("result").textContent = message;
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateUI("Game reset! Choose your move! 🎯");
}

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    themeToggle.textContent = body.classList.contains("light-theme") ? "☀️" : "🌙";
  });
  

