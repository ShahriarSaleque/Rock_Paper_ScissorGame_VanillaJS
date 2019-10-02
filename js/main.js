//Get the necessary elements from the UI
const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");

//Object to keep all the scores
const scoreboard = {
  player: 0,
  computer: 0
};

//Add Event Listeners
choices.forEach(choice => {
  choice.addEventListener("click", play);
});

//Functions
function play(e) {
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  //Decide who the winner is
  const winner = getWinner(playerChoice, computerChoice);
  console.log(playerChoice, computerChoice, winner);
  //Display winner as modal on webpage
  showWinner(winner, playerChoice, computerChoice);
}

function getComputerChoice() {
  //Generate a random number
  const random = Math.random();
  if (random <= 0.33) {
    return "rock";
  } else if (random <= 0.67) {
    return "paper";
  } else {
    return "scissors";
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

function showWinner(w, p, c) {
  if (w === "computer") {
    scoreboard.computer++;
    result.innerHTML = `
 <h1 class="text-lose">You Lose</h1>
 <i class="fas fa-hand-${c} fa-10x"></i>
 <p>Computer Chose ${c}</p>
 
 `;
  } else if (w === "player") {
    scoreboard.player++;
    result.innerHTML = `
     <h1 class="text-win">You Win</h1>
     <i class="fas fa-hand-${c} fa-10x"></i>
     <p>Computer Chose ${c}</p>
     
     `;
  } else {
    result.innerHTML = `
    <h1>Its a Draw</h1>
    <i class="fas fa-hand-${c} fa-10x"></i>
    <p>Computer Chose the same ${c} as You</p>
    
    `;
  }

  //Dynamically change the scoreboard
  score.innerHTML = `
  <p>Player: ${scoreboard.player}</p>
  <p>Computer: ${scoreboard.computer}</p>
  
  `;

  modal.style.display = "inline-block";

  //Clear the resulting modal
  setTimeout(function() {
    modal.style.display = "none";
  }, 3000);
}
