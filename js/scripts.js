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

    const roll = document.getElementById("rollBtn");
    const stop = document.getElementById("stepBtn");

    roll.addEventListener("click", () => {
      let currentRoll = Math.floor(Math.random() * 6) + 1;

      if (currentRoll != 1) {
        totalRoll += currentRoll;
        console.log(totalRoll);
      } else {
        totalRoll = 0;
        console.log("bust!");
        console.log(`Your current score is ${this.score}`);
        return;
      }
    });

    stop.addEventListener("click", () => {
      this.score += totalRoll;
      totalRoll = 0;
      console.log(`Your current score is ${this.score}`);
      return;
    });
  }
}

const player1 = new Player(1);
const player2 = new Player(2);

window.addEventListener("load", runapp);

function runapp() {
  const startRoll = document.getElementById("startBtn");
  const name = document.getElementById("begin");

  name.addEventListener("click", () => {
    player1.playerEnter(document.getElementById("enterName1").value);
    player2.playerEnter(document.getElementById("enterName2").value);
  });

  startRoll.addEventListener("click", player1.playerRoll(player1.score));
}
