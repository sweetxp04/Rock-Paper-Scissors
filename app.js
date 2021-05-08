let userScoreDom = document.getElementById("user_score");
let compScoreDom = document.getElementById("comp_score");
let rockBtn = document.getElementById("r");
let paperBtn = document.getElementById("p");
let scissorBtn = document.getElementById("s");
let resultDom = document.querySelector(".result");
let userScore = 0;
let compScore = 0;
var compChoise = 0;
var message = "";
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function game(userChoise, name) {
  compChoise = getRandomInt(3);
  if (compChoise == userChoise) {
    message = "Both Take " + name + ". Result draw!";
    resultDom.innerHTML = message;
  } else if (compChoise == 0 && userChoise == 1) {
    userScore++;
    message = "comp take rock and you take " + name + ". you win!";
    resultDom.innerHTML = message;
    userScoreDom.innerText = userScore;
  } else if (compChoise == 0 && userChoise == 2) {
    compScore++;
    message = "comp take rock and you take " + name + ". comp win!";
    resultDom.innerHTML = message;
    compScoreDom.innerText = compScore;
  } else if (compChoise == 1 && userChoise == 0) {
    compScore++;
    message = "comp take paper and you take " + name + ". comp win!";
    resultDom.innerHTML = message;
    compScoreDom.innerText = compScore;
  } else if (compChoise == 1 && userChoise == 2) {
    userScore++;
    message = "comp take paper and you take " + name + ". you win!";
    resultDom.innerHTML = message;
    userScoreDom.innerText = userScore;
  } else if (compChoise == 2 && userChoise == 0) {
    userScore++;
    message = "comp take scissor and you take " + name + ". you win!";
    resultDom.innerHTML = message;
    userScoreDom.innerText = userScore;
  } else if (compChoise == 2 && userChoise == 1) {
    compScore++;
    message = "comp take scissor and you take " + name + ". comp win!";
    resultDom.innerHTML = message;
    compScoreDom.innerText = compScore;
  }
}

rockBtn.addEventListener("click", function () {
  game(0, "rock");
});
paperBtn.addEventListener("click", function () {
  game(1, "paper");
});
scissorBtn.addEventListener("click", function () {
  game(2, "scissor");
});
