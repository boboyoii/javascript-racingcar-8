export const VIEW_MESSAGES = Object.freeze({
  INPUT: {
    CAR_NAMES:
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    ROUND_COUNT: "시도할 횟수는 몇 회인가요?\n",
  },
  OUTPUT: {
    RESULT_HEADER: "\n실행결과",
    WINNER_ANNOUNCE: (winners) => `최종 우승자 : ${winners.join(", ")}`,
  },
});
