import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { GAME_RULES } from "../constants/gameRules.js";

export const validator = {
  isEmpty(names) {
    return names.some((name) => name.length === 0);
  },

  isInvalidLength(names) {
    return names.some((name) => name.length > GAME_RULES.MAX_CAR_NAME_LENGTH);
  },

  hasWhitespace(names) {
    return names.some((name) => name.includes(" "));
  },

  validateCarNames(names) {
    if (this.isEmpty(names)) throw new Error(ERROR_MESSAGES.EMPTY_NAME);
    if (this.isInvalidLength(names))
      throw new Error(ERROR_MESSAGES.INVALID_LENGTH);
    if (this.hasWhitespace(names)) throw new Error(ERROR_MESSAGES.WHITESPACE);
  },

  isNotPositiveInteger(count) {
    return Number.isNaN(count) || !Number.isInteger(count) || count <= 0;
  },

  validateRoundCount(count) {
    if (this.isNotPositiveInteger(count))
      throw new Error(ERROR_MESSAGES.NOT_POSITIVE_INTEGER_COUNT);
  },
};
