import { Console } from "@woowacourse/mission-utils";
import { VIEW_MESSAGES } from "../constants/viewMessages.js";

class GameView {
  async inputCarNames() {
    const input = await Console.readLineAsync(VIEW_MESSAGES.INPUT.CAR_NAMES);
    return input;
  }

  async inputRoundCount() {
    const input = await Console.readLineAsync(VIEW_MESSAGES.INPUT.ROUND_COUNT);
    return input;
  }

  printRoundResult(roundResult) {
    const { round, cars } = roundResult;
    if (round === 1) Console.print(VIEW_MESSAGES.OUTPUT.RESULT_HEADER);

    const result = cars.map(
      (car) => `${car.getName()} : ${"-".repeat(car.getPosition())}`
    );
    Console.print(`${result.join("\n")}\n`);
  }

  printWinners(winners) {
    Console.print(VIEW_MESSAGES.OUTPUT.WINNER_ANNOUNCE(winners));
  }
}

export default GameView;
