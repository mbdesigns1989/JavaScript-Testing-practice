const Calculator = require('./calculator.js');

const calculator = new Calculator();

describe('calculator add method', () => {
  test('add', () => {
    expect(calculator.add(9, 2)).toBe(11);
  });

  test('add', () => {
    expect(calculator.add(0, 2)).toBe(2);
  });

  test('add', () => {
    expect(calculator.add(60, 70)).toBe(130);
  });
});

describe('calculator subtract method', () => {
  test('subtract', () => {
    expect(calculator.subtract(120, 80)).toBe(40);
  });

  test('subtract', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('subtract', () => {
    expect(calculator.subtract(45, 18)).toBe(27);
  });
});

describe('calculator divide method', () => {
  test('divide', () => {
    expect(calculator.divide(60, 5)).toBe(12);
  });

  test('divide', () => {
    expect(calculator.divide(40, 4)).toBe(10);
  });

  test('divide', () => {
    expect(calculator.divide(88, 2)).toBe(44);
  });
});

describe('calculator multiply method', () => {
  test('multiply', () => {
    expect(calculator.multiply(40, 3)).toBe(120);
  });

  test('multiply', () => {
    expect(calculator.multiply(10, 5)).toBe(50);
  });

  test('multiply', () => {
    expect(calculator.multiply(8, 2)).toBe(16);
  });
});