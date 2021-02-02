function sumEvenNumbers(input) {
    return input.filter(el => Number.isInteger(el) && el % 2 === 0).reduce((ac, cum) => ac + cum, 0);
  }