/* Skipping tests:
    A test can be skipped with skip() or by
    using the x prefix.  Here we skip the 
    first two tests.
*/

const { add, mul, sub, div } = require('./arith');

xtest('2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test.skip('3 - 4 = -1', () => {
  expect(sub(3, 4)).toBe(-1);
});

test('5 * 6 = 30', () => {
  expect(mul(5, 6)).toBe(30);
});

test('8 / 4 = 2', () => {
  expect(div(8, 4)).toBe(2);
});

