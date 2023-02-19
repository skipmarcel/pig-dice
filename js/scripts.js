class Player {
  constructor(playerNumber) {
    this.name = null;
    this.playerNumber = playerNumber;
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
}

function playerRoll() {
  let x = Math.floor(Math.random() * 6) + 1;

  console.log(x);
}

const player1 = new Player(1);
const player2 = new Player(2);

player1.playerEnter("John");
player2.playerEnter("Alice");

window.addEventListener("load", runapp);

function runapp() {
  const button = document.getElementById("rollBtn");
  button.addEventListener("click", playerRoll);
}
