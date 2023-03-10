class Player {
  constructor(playerNumber) {
    this.name = null;
    this.playerNumber = playerNumber;
    this.score = 0;
  }

  playerEnter(name) {
    if (!this.name) {
      this.name = name;
    } else {
    }
  }

  playerRoll() {
    playerTurn.innerText = names().name;
    let totalRoll = 0;
    let roll = document.getElementById("rollBtn");
    let stop = document.getElementById("stepBtn");

    roll.addEventListener("click", () => {
      let currentRoll = Math.floor(Math.random() * 6) + 1;
      let scoreText = document.getElementById("scoreInfoText");
      if (currentRoll != 1) {
        totalRoll += currentRoll;
        scoreText.innerText =
          names().name +
          " rolled a " +
          currentRoll +
          " for a total of " +
          totalRoll;
      } else {
        totalRoll = 0;
        scoreText.innerText = "BUST!";
        turn = swapTurn();
        replaceTurnName();
        return;
      }
      diceRestart();
    });

    function replaceTurnName() {
      playerTurn.innerText = names().name;
    }
    // Dice animation start
    function diceRestart() {
      let wrapper = document.querySelector(".wrapper");
      let wrapper2 = document.querySelector(".wrapper2");
      let die = document.querySelector(".die");
      let die2 = document.querySelector(".die2");

      wrapper.style.animationName = "none";
      wrapper2.style.animationName = "none";
      die.style.animationName = "none";
      die2.style.animationName = "none";

      requestAnimationFrame(() => {
        wrapper.style.animationName = "";
        wrapper2.style.animationName = "";
        die.style.animationName = "";
        die2.style.animationName = "";
      });
    }
    //Step away button adds to score
    stop.addEventListener("click", () => {
      let scoreText = document.getElementById("scoreInfoText");
      let playAgain = document.createElement("button");
      playAgain.id = "playAgainButton";
      playAgain.innerHTML = "PLAY AGAIN";
      playAgain.addEventListener("click", reset);
      playAgain.style.cssText =
        "visibility: visible; position: absolute; margin-left: 12px; margin-top: 16px; background-color: darkblue; border: none; border-radius: 10px; color: aliceblue; padding: 8px 10px; text-align: center; text-decoration: none; font-size: 16px";
      names().score += totalRoll;
      scoreText.innerText = totalRoll + " points for " + names().name;
      totalRoll = 0;
      let tally = document.getElementById(`${names().name}`);
      tally.innerText = names().score;
      if (names().score >= 5) {
        scoreText.innerText = names().name + " is the winner!";
        document.querySelector("p").before(playAgain);
      }
      turn = swapTurn();
      replaceTurnName();
      return;
    });

    function swapTurn() {
      if (turn) {
        return false;
      } else {
        return true;
      }
    }
  }
}

const player1 = new Player(1);
const player2 = new Player(2);
let turn = true;
let playerTurn;

window.addEventListener("load", runapp);

let submitted = false;

function runapp() {
  submitted = true;
  let startRoll = document.getElementById("startBtn");
  let name = document.getElementById("nameSubmit");

  name.addEventListener("click", () => {
    document.getElementById("secondPage").hidden = false;
    document.getElementById("firstPage").hidden = true;
    //
    player1.playerEnter(document.getElementById("enterName1").value);
    player2.playerEnter(document.getElementById("enterName2").value);

    document.getElementById("p1Score").setAttribute("id", player1.name);
    document.getElementById("p2Score").setAttribute("id", player2.name);

    playerTurn = document.createElement("p");
    playerTurn.style.cssText =
      "display:inline; color: darkblue; font-size: 20px; text-align: center; margin-left: 15px; margin-right: 10px, padding-left: 8px";
    playerTurn.className = "playerPtag";
    playerTurn.innerText = names().name;
    document.getElementById("startBtn").before(playerTurn);
  });

  startRoll.addEventListener("click", () => {
    names().playerRoll();
    startBtn.classList.add("startBtn2");
    hide(playerTurn);
  });
}

function hide(element) {
  if (element.style.visibility === "visible") {
    element.style.visibility = "collapse";
  } else {
    element.style.visibility = "visible";
  }
}
//checks the current turn, then returns player 1 or player 2 depending on whoes turn it is
function names() {
  if (turn) {
    return player1;
  } else {
    return player2;
  }
}

function reset() {
  let buttonWeWantToKill = document.getElementById("playAgainButton");
  buttonWeWantToKill.remove();
  totalRoll = 0;
  turn = true;
  document.getElementById(player1.name).setAttribute("id", "p1Score");
  document.getElementById("p1Score").innerText = "0";
  names().name = null;
  names().score = 0;
  turn = false;
  document.getElementById(player2.name).setAttribute("id", "p2Score");
  document.getElementById("p2Score").innerText = "0";
  names().name = null;
  names().score = 0;

  document.getElementById("firstPage").hidden = false;
  document.getElementById("secondPage").hidden = true;
  document.getElementById("enterName1").value = "";
  document.getElementById("enterName2").value = "";
}
