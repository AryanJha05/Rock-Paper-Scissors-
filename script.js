const resultDiv = document.getElementById("result");
const playerScoreSpan = document.getElementById("playerScore");
const computerScoreSpan = document.getElementById("computerScore");
const themeToggle = document.getElementById("themeToggle");

let playerScore = 0;
let computerScore = 0;
let round = 0;
const maxRounds = 5;
let gameOver = false;

const choices = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
  if (gameOver) return;

  const computerChoice = getComputerChoice();
  const winner = determineWinner(playerChoice, computerChoice);
  let resultText = "";

  round++;

  if (winner === "draw") {
    resultText = `🤝 Round ${round}: It's a Draw! You both chose ${getEmoji(playerChoice)}`;
    showPopup("🤝 It's a Draw!", "draw");
  } else if (winner === "player") {
    playerScore++;
    resultText = `🎉 Round ${round}: You Win! ${getEmoji(playerChoice)} beats ${getEmoji(computerChoice)}`;
    showPopup("🎉 You Win!", "win");
  } else {
    computerScore++;
    resultText = `💻 Round ${round}: You Lose! ${getEmoji(computerChoice)} beats ${getEmoji(playerChoice)}`;
    showPopup("💻 You Lose!", "lose");
  }

  updateUI(resultText);

  if (round === maxRounds) {
    gameOver = true;
    declareFinalWinner();
  }
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) return "player";
  return "computer";
}

function updateUI(message) {
  resultDiv.textContent = message;
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  gameOver = false;
  updateUI("Game reset! Choose your move 🎯");
}

function showPopup(message, type) {
  const popup = document.getElementById("popup");
  popup.textContent = message;

  const colors = {
    win: "#00ff88",
    lose: "#ff4444",
    draw: "#ffaa00"
  };

  popup.style.color = colors[type];
  popup.style.borderColor = colors[type];
  popup.style.boxShadow = `0 0 20px ${colors[type]}, 0 0 40px ${colors[type]}`;
  popup.classList.add("show");

  setTimeout(() => popup.classList.remove("show"), 3000);
}

function declareFinalWinner() {
  if (playerScore > computerScore) {
    showPopup("🏆 You are the Final Winner!", "win");
    resultDiv.textContent = `🏆 Game Over! You won ${playerScore} - ${computerScore}`;
  } else if (computerScore > playerScore) {
    showPopup("💻 Computer Wins the Game!", "lose");
    resultDiv.textContent = `🏆 Game Over! Computer won ${computerScore} - ${playerScore}`;
  } else {
    showPopup("🤝 The Game is a Tie!", "draw");
    resultDiv.textContent = `🤝 Game Over! It's a Tie ${playerScore} - ${computerScore}`;
  }
}

function getEmoji(choice) {
  return {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️"
  }[choice];
}

function startGame() {
  document.getElementById("startPage").style.display = "none";
  document.getElementById("gamePage").style.display = "block";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  themeToggle.textContent = document.body.classList.contains("light-theme") ? "🌞" : "🌙";
});




function showPopup(message, type) {
  const popup = document.getElementById("popup");
  popup.textContent = message;

  const colors = {
    win: "#00ff88",
    lose: "#ff4444",
    draw: "#ffaa00"
  };

  popup.style.color = colors[type];
  popup.style.borderColor = colors[type];
  popup.style.boxShadow = `0 0 12px ${colors[type]}, 0 0 24px ${colors[type]}`;
  popup.classList.add("show");

  setTimeout(() => popup.classList.remove("show"), 3000);
}
