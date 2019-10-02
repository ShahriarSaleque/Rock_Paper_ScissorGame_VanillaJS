//Get the necessary elements from the UI
const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");

//Add Event Listeners
choices.forEach(choice => {
  choice.addEventListener("click", getPlayer);
});

//Functions
function getPlayer(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  //Decide who the winner is
  const winner = getWinner(playerChoice, computerChoice);
  console.log(playerChoice, computerChoice, winner);
}

function getComputerChoice() {
  //Generate a random number
  const random = Math.random();
  if (random <= 0.33) {
    return "rock";
  } else if (random <= 0.67) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissor") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissor") {
      return "computer";
    } else {
      return "player";
    }
  }
}
