import { Random } from "@woowacourse/mission-utils";
import Car from "../model/Car.js";
import { GAME_RULES } from "../constants/gameRules.js";

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
      if (this.canAdvance()) {
        car.advance();
      }
    });

    return {
      round: this.currentRound,
      cars: this.cars,
    };
  }

  canAdvance() {
    const randomNumber = Random.pickNumberInRange(
      GAME_RULES.RANDOM_MIN,
      GAME_RULES.RANDOM_MAX
    );
    return randomNumber >= GAME_RULES.ADVANCE_THRESHOLD;
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
