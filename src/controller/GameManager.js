import validator from "../model/validator.js";

class GameManager {
  constructor(view, service) {
    this.view = view;
    this.service = service;
  }

  async setup() {
    const namesInput = await this.view.inputCarNames();
    const names = namesInput.split(",");
    validator.validateCarNames(names);
    this.service.setCars(names);

    const countInput = await this.view.inputRoundCount();
    const count = Number(countInput);
    validator.validateRoundCount(count);
    this.service.setRoundCount(count);
  }

  play() {
    while (!this.service.isFinished()) {
      const roundResult = this.service.playRound();
      this.view.printRoundResult(roundResult);
    }
  }
}

export default GameManager;
