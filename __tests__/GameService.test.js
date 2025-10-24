import GameService from "../src/service/GameService.js";
import { GAME_RULES } from "../src/constants/gameRules.js";
import { Random } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

describe("GameService", () => {
  let service;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new GameService();
    service.setCars(["pobi", "woni", "jun"]);
    service.setRoundCount(3);
  });

  test("이름 배열을 넣으면 자동차 객체들이 만들어져야 한다.", () => {
    expect(service.cars).toHaveLength(3);
    expect(service.cars[0].getName()).toBe("pobi");
  });

  test("라운드 수를 설정하면 totalRounds에 저장되어야 한다.", () => {
    expect(service.totalRounds).toBe(3);
  });

  test("아직 마지막 라운드가 아니면 isFinished가 false여야 한다.", () => {
    service.currentRound = 2;
    expect(service.isFinished()).toBe(false);
  });

  test("마지막 라운드에 도달했거나 지나면 isFinished가 true여야 한다.", () => {
    service.currentRound = 3;
    expect(service.isFinished()).toBe(true);
  });

  test("라운드를 한 번 진행하면 currentRound가 1 늘어나야 한다.", () => {
    Random.pickNumberInRange.mockReturnValue(GAME_RULES.ADVANCE_THRESHOLD);
    const prev = service.currentRound;
    service.playRound();
    expect(service.currentRound).toBe(prev + 1);
  });

  test("모든 자동차가 전진 조건을 만족하면 이번 라운드에서 모든 자동차가 한 칸씩 나아가야 한다.", () => {
    Random.pickNumberInRange.mockReturnValue(GAME_RULES.ADVANCE_THRESHOLD);
    service.playRound();

    service.cars.forEach((car) => {
      expect(car.getPosition()).toBe(1);
    });
  });

  test("모든 자동차가 전진 조건을 만족하지 못하면 아무 자동차도 움직이면 안 된다.", () => {
    Random.pickNumberInRange.mockReturnValue(GAME_RULES.ADVANCE_THRESHOLD - 1);
    service.playRound();

    service.cars.forEach((car) => {
      expect(car.getPosition()).toBe(0);
    });
  });

  test("랜덤 값이 전진 조건값 이상이면 전진하도록 처리되어야 한다.", () => {
    Random.pickNumberInRange.mockReturnValue(GAME_RULES.ADVANCE_THRESHOLD);
    expect(service.canAdvance()).toBe(true);
  });

  test("랜덤 값이 전진 조건값보다 작으면 전진하지 않아야 한다.", () => {
    Random.pickNumberInRange.mockReturnValue(GAME_RULES.ADVANCE_THRESHOLD - 1);
    expect(service.canAdvance()).toBe(false);
  });

  test("가장 멀리 간 자동차의 이름만 우승자로 나와야 한다.", () => {
    service.cars[0].advance();
    service.cars[1].advance();
    service.cars[1].advance();

    const winners = service.getWinners();
    expect(winners).toEqual(["woni"]);
  });

  test("동점이면 공동 우승자들이 모두 반환되어야 한다.", () => {
    service.cars[0].advance();
    service.cars[1].advance();

    const winners = service.getWinners();
    expect(winners.sort()).toEqual(["pobi", "woni"].sort());
  });
});
