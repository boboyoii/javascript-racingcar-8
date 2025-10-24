import Car from "../src/model/Car.js";

describe("Car 클래스", () => {
  test("자동차 이름이 올바르게 저장된다.", () => {
    const car = new Car("pobi");
    expect(car.getName()).toBe("pobi");
  });

  test("advance() 호출 시 위치가 1 증가한다.", () => {
    const car = new Car("pobi");

    car.advance();
    expect(car.getPosition()).toBe(1);
  });
});
