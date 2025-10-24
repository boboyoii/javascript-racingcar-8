import { Console } from "@woowacourse/mission-utils";

class GameView {
  async inputCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return input;
  }

  async inputRoundCount() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    return input;
  }

  printRoundResult(roundResult) {
    const { round, cars } = roundResult;
    if (round === 1) Console.print("\n실행결과");

    const result = cars.map(
      (car) => `${car.getName()} : ${"-".repeat(car.getPosition())}`
    );
    Console.print(`${result.join("\n")}\n`);
  }
}

export default GameView;
