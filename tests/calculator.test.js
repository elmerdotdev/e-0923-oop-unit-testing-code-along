/* eslint-env jest */
const Calculator = require("../calculator");

test("90 is higher than 100 equals false", () => {
  expect(higherThanOneHundred(90)).toBe(false);
})

test("120 is higher than 100 equals true", () => {
  expect(higherThanOneHundred(120)).toBe(true);
})


// testing adding positive numbers
test("adds 5 + 10 to equal 15", () => {
    expect(calc.add(5, 10)).toBe(15);
});

// testing adding negative numbers
test("adds -3 + -3 to equal -6", () => {
    const calc = new Calculator();
    expect(calc.add(-3, -3)).toBe(-6);
});

// testing adding positive and negative numbers
test('adds -3 + 3 to equal 0', () => {
  const calc = new Calculator()
  expect(calc.add(-3, 3)).toBe(0)
})

// testing adding decimal numbers
test('adds .5 + .5 to equal 1', () => {
  const calc = new Calculator()
  expect(calc.add(.5, .5)).toBe(1)
})

test('substracts 5 - 2 equals 3', () => {
  const calc = new Calculator()
  expect(calc.subtract(5, 2)).toBe(3)
})

test('multiplies 3 * 3 equals 9', () => {
  const calc = new Calculator()
  expect(calc.multiply(3, 3)).toBe(9)
})

test('multiplies 3 * 0 equals 0', () => {
  const calc = new Calculator()
  expect(calc.multiply(3, 0)).toBe(0)
})

test('divides 100 / 5 equals 20', () => {
  const calc = new Calculator()
  expect(calc.divide(100, 5)).toBe(20)
})

test('divides 100 / 0 equals Infinity', () => {
  const calc = new Calculator()
  expect(calc.divide(100, 0)).toBe(Infinity)
})

test('divides -100 / 5 equals -20', () => {
  const calc = new Calculator()
  expect(calc.divide(-100, 5)).toBe(-20)
})

test('divides 100 / -5 equals -20', () => {
  const calc = new Calculator()
  expect(calc.divide(100, -5)).toBe(-20)
})

test('divides -100 / -5 equals 20', () => {
  const calc = new Calculator()
  expect(calc.divide(-100, -5)).toBe(20)
})

test('divides 0 / 5 equals 0', () => {
  const calc = new Calculator()
  expect(calc.divide(0, 5)).toBe(0)
})

test('divides 0 / -5 equals 0', () => {
  const calc = new Calculator()
  expect(calc.divide(0, -5)).toBe(0)
})

test('divides 0 / 0 equals 0', () => {
  const calc = new Calculator()
  expect(calc.divide(0, 0)).toBe(NaN)
})

test('divides -0 / 5 equals 0', () => {
  const calc = new Calculator()
  expect(calc.divide(-0, 5)).toBe(0)
})

test('divides -0 / -5 equals 0', () => {
  const calc = new Calculator()
  expect(calc.divide(-0, -5)).toBe(0)
})