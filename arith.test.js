const { add, sub, mul, div } = require('./arith');

test('2 + 7 = 9', () => {
  expect(add(2, 7)).toBe(9);
});

test('21 - 4 = 17', () => {
  expect(sub(21, 4)).toBe(17);
});

test('8 * 7 = 56', () => {
  expect(mul(8, 7)).toBe(56);
});

test('8 / 4 = 2', () => {
  expect(div(8, 4)).toBe(2);
});