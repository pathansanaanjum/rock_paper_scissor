const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(player, computer) {
  if (player === computer) return "It's a tie!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "You win!";
  }
  return "You lose!";
}

app.post("/play", (req, res) => {
  const playerChoice = req.body.player;
  const computerChoice = getComputerChoice();
  const result = getResult(playerChoice, computerChoice);
  res.json({ player: playerChoice, computer: computerChoice, result });
});

app.listen(PORT, () => {
  console.log(`Rock Paper Scissors server running at http://localhost:${PORT}`);
});
