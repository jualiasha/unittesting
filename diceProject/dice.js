"use strict";

module.exports = class Dice {
  constructor(upperBound = 6) {
    if (!Number.isInteger(upperBound)) {
      throw new Error("upper bound must be an integer");
    }

    if (upperBound > 20) {
      throw new Error("Upper bound too big");
    }
    if (upperBound < 2) {
      throw new Error("Upper bound too small");
    }

    this.upperBound = upperBound;
    this.dotCount = 0;
    this.min = 1;
  }
  get dots() {
    return this.dotCount;
  }
  get maximumValue() {
    return this.upperBound;
  }
  get minimumValue() {
    return this.min;
  }

  roll() {
    this.dotCount = Math.ceil(Math.random() * this.upperBound);
  }

  toString() {
    return this.dotCount === 0 ? "Not rolled yet" : `${this.dots}`;
  }
};
