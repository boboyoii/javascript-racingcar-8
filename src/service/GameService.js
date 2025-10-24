import { Random } from "@woowacourse/mission-utils";
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
    return this.currentRound >= this.totalRounds;
  }

  playRound() {
    this.currentRound += 1;

    this.cars.forEach((car) => {
      const canAdvance = Random.pickNumberInRange(0, 9) >= 4;
      if (canAdvance) {
        car.advance();
      }
    });

    return {
      round: this.currentRound,
      cars: this.cars,
    };
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));

    const winners = this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());

    return winners;
  }
}

export default GameService;
