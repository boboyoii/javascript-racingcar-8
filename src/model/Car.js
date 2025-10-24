class Car {
  #position = 0;

  constructor(name) {
    this.name = name;
  }

  advance() {
    this.#position += 1;
  }

  getPosition() {
    return this.#position;
  }
}

export default Car;
