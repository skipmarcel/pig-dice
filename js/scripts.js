class Player {
  constructor(playerNumber) {
    this.name = null;
    this.playerNumber = playerNumber;
    this.score = 0;
  }

  playerEnter(name) {
    if (!this.name) {
      this.name = name;
      console.log(
        this.name + " has entered the game as player " + this.playerNumber
      );
    } else {
      console.log(
        this.name + " has already entered as player " + this.playerNumber
      );
    }
  }

  playerRoll() {
    let totalRoll = 0;

    let roll = document.getElementById("rollBtn");
    let stop = document.getElementById("stepBtn");

    roll.addEventListener("click", () => {
      let currentRoll = Math.floor(Math.random() * 6) + 1;

      if (currentRoll != 1) {
        totalRoll += currentRoll;
        console.log("you rolled a ", currentRoll, "for a total of", totalRoll);
      } else {
        totalRoll = 0;
        console.log("bust!");
        console.log(`Your current score is ${this.score}`);
        return;
      }
    });

    stop.addEventListener("click", () => {
      player1.score += totalRoll;
      totalRoll = 0;
      console.log(player1.score + " points for " + player1.name);
      return;
    });
  }
}

const player1 = new Player(1);
const player2 = new Player(2);

window.addEventListener("load", runapp);

function runapp() {
  let startRoll = document.getElementById("startBtn");
  let name = document.getElementById("nameSubmit");
  let roll = document.getElementById("rollBtn");
  let stop = document.getElementById("stepBtn");

  name.addEventListener("click", () => {
    player1.playerEnter(document.getElementById("enterName1").value);
    player2.playerEnter(document.getElementById("enterName2").value);
    let playerTurn = document.createElement("p");
    playerTurn.style.cssText = "display:inline";
    playerTurn.innerText = " " + player1.name;
    document.getElementById("startBtn").after(playerTurn);
    document.createElement("p");
    hide(startRoll);
  });
  startRoll.addEventListener("click", () => {
    player1.playerRoll(player1.score);
    hide(roll);
    hide(stop);
  });
}

function hide(element) {
  if (element.style.visibility === "visible") {
    element.style.visibility = "collapse";
  } else {
    element.style.visibility = "visible";
  }
}
