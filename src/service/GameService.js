import Car from "../model/Car.js";

class GameService {
  constructor() {
    this.cars = [];
    this.totalRounds = 0;
    this.currentRound = 0;
  }

  setCars(names) {
    this.cars = names.map((name) => new Car(name));
  }

  setRoundCount(count) {
    this.totalRounds = count;
  }

  isFinished() {
    return this.totalRounds === this.currentRound;
  }
}

export default GameService;
