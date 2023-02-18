class Player {
  constructor(name) {
    this.name = name;
  }

  playerEnter(name) {
    if (!this.name) {
      this.name = name;
      console.log(
        this.name + " has entered the game as " + this.constructor.name + "."
      );
    } else {
      console.log(
        this.constructor.name +
          " has already entered the game as " +
          this.name +
          "."
      );
    }
  }
}

const player1 = new Player();
const player2 = new Player();

player1.playerEnter("John");
player2.playerEnter("Alice");

// let x = Math.floor(Math.random() * 6) + 1;

// console.log(x);
