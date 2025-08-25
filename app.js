let score = {
  wins: 0,
  ties: 0,
  losses: 0,
};

const saved = JSON.parse(localStorage.getItem("scores"));
if (saved) {
  score = saved;
  let updateTag = document.querySelector(".play-score");
  updateTag.innerHTML = `Wins: <strong>${score.wins}</strong> , Losses: <strong>${score.losses}</strong>, Ties: <strong>${score.ties}</strong>`;
}
let computersMove;
function playGame(playerMove) {
  let displayOutcome = document.querySelector(".play-outcome");
  let playMoves = document.querySelector(".play-moves");
  let computersMove = Math.random();
  if (computersMove <= 1 / 3) {
    computersMove = "rock";
  } else if (computersMove >= 1 / 3 && computersMove <= 2 / 3) {
    computersMove = "paper";
  } else if (computersMove >= 2 / 3 && computersMove < 1) {
    computersMove = "scissors";
  }
  console.log(computersMove);
  console.log(playerMove);
  playMoves.innerHTML = `You picked <strong>${playerMove}</strong> and computer picked <strong>${computersMove}</strong>`;
  if (playerMove === computersMove) {
    console.log("Tie");
    score.ties += 1;
    displayOutcome.innerHTML = "Results: <strong>Its a Tie :|</strong>";
  } else if (
    (playerMove === "rock" && computersMove === "scissors") ||
    (playerMove === "paper" && computersMove === "rock") ||
    (playerMove === "scissors" && computersMove === "paper")
  ) {
    console.log("You win!!");
    score.wins += 1;
    displayOutcome.innerHTML = "Results:<strong> You Won!!!! :D</strong>";
  } else {
    console.log("You lost!!");
    score.losses += 1;
    displayOutcome.innerHTML = "Results:<strong> You Lost!!! :(</strong>";
  }
  saveData();
  updateScore();
}

function updateScore() {
  let updateTag = document.querySelector(".play-score");
  let tScore = JSON.parse(localStorage.getItem("scores"));
  updateTag.innerHTML = `Wins: <strong>${tScore.wins}</strong> , Losses: <strong>${tScore.losses}</strong>, Ties: <strong>${tScore.ties}</strong>`;
}
function saveData() {
  localStorage.setItem("scores", JSON.stringify(score));
}

const rock = document.querySelector(".rock-btn");
rock.addEventListener("click", () => playGame("rock"));

const paper = document.querySelector(".paper-btn");
paper.addEventListener("click", () => playGame("paper"));

const scissors = document.querySelector(".scissors-btn");
scissors.addEventListener("click", () => playGame("scissors"));

const reset = document.querySelector("#reset-btn");
reset.addEventListener("click", () => {
  score = {
    wins: 0,
    ties: 0,
    losses: 0,
  };
  saveData();
  updateScore();
});
