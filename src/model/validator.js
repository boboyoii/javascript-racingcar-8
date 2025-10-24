const validator = {
  isEmpty(names) {
    return names.some((name) => name.length === 0);
  },

  isInvalidLength(names) {
    return names.some((name) => name.length > 5);
  },

  hasWhitespace(names) {
    return names.some((name) => name.includes(" "));
  },

  validateCarNames(names) {
    if (this.isEmpty(names))
      throw new Error("[ERROR] 이름이 비어 있습니다. (구분자 앞뒤 확인)");
    if (this.isInvalidLength(names))
      throw new Error("[ERROR] 이름은 5자 이하만 가능합니다.");
    if (this.hasWhitespace(names))
      throw new Error("[ERROR] 이름에 공백이 포함될 수 없습니다.");
  },
};

export default validator;
