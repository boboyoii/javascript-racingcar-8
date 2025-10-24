import validator from "../model/validator.js";

class GameManager {
  constructor(view, service) {
    this.view = view;
    this.service = service;
  }

  async setup() {
    const carNamesInput = await this.view.inputCarNames();
    const carNames = carNamesInput.split(",");
    validator.validateCarNames(carNames);
    this.service.setCars(carNames);

    const roundCountInput = await this.view.inputRoundCount();
    const roundCount = Number(roundCountInput);
    validator.validateRoundCount(roundCount);
    this.service.setRoundCount(roundCount);
  }
}

export default GameManager;
