import { validator } from "../src/model/validator.js";
import { ERROR_MESSAGES } from "../src/constants/errorMessages.js";

describe("validator 모듈", () => {
  test("자동차 이름이 비어 있으면 에러를 던진다.", () => {
    expect(() => validator.validateCarNames(["", "pobi"])).toThrow(
      ERROR_MESSAGES.EMPTY_NAME
    );
  });

  test("공백만 있는 이름은 비어 있는 것으로 간주하여 에러를 던진다.", () => {
    expect(() => validator.validateCarNames(["   "])).toThrow(
      ERROR_MESSAGES.EMPTY_NAME
    );
  });

  test("자동차 이름이 5자를 초과하면 에러를 던진다.", () => {
    expect(() => validator.validateCarNames(["abcdef"])).toThrow(
      ERROR_MESSAGES.INVALID_LENGTH
    );
  });

  test("자동차 이름에 공백이 포함되면 에러를 던진다.", () => {
    expect(() => validator.validateCarNames(["po bi"])).toThrow(
      ERROR_MESSAGES.WHITESPACE
    );
  });

  test("유효한 자동차 이름은 에러 없이 통과한다.", () => {
    expect(() =>
      validator.validateCarNames(["pobi", "crong", "honux"])
    ).not.toThrow();
  });

  test("라운드 수가 0 이하일 경우 에러를 던진다.", () => {
    expect(() => validator.validateRoundCount(0)).toThrow(
      ERROR_MESSAGES.NOT_POSITIVE_INTEGER_COUNT
    );
  });

  test("라운드 수가 정수가 아닐 경우 에러를 던진다.", () => {
    expect(() => validator.validateRoundCount("abc")).toThrow(
      ERROR_MESSAGES.NOT_POSITIVE_INTEGER_COUNT
    );
  });

  test("시도 횟수가 1 이상의 정수이면 통과한다.", () => {
    expect(() => validator.validateRoundCount(5)).not.toThrow();
  });
});
