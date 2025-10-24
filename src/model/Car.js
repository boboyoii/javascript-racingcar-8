class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  advance() {
    this.#position += 1;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}

export default Car;
