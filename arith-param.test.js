// arith-param.test.js

/*  Jest paramaeterized tests.
    Parameterized tests allow the same test to be
    run multiple times using different values.
    This makes for more powerful tests.

    For parameterized test we use the each()
    global function.

    In these tests, we run each arithmetic function
    multiple times with different input data:

    test.each([[1, 1, 2], [-1, 2, 1], [2, 1, 3]])(
      '%i + %i equals %i', (a, b, expected) => {
        expect(add(a, b)).toBe(expected)
      }
    )

    The each() method receives an array of arrays
    with the arguments that are passed into the
    test function for each row.  The %i are format
    specifiers that expect integers.  This is for
    output that is shown with the --verbose option.
*/

const { add, mul, sub, div } = require('./arith')

test.each([[1, 1, 2], [-1, 2, 1], [2, 1, 3]])(
  '%i + %i equals %i', (a, b, expected) => {
    expect(add(a, b)).toBe(expected)
  }
)

test.each([[1, 1, 0], [-1, 2, -3], [2, 2, 0]])(
  '%i - %i equals %i', (a, b, expected) => {
    expect(sub(a, b)).toBe(expected)
  }
)

test.each([[1, 1, 1], [-1, 2, -2], [2, 2, 4]])(
  '%i * %i equals %i', (a, b, expected) => {
    expect(mul(a, b)).toBe(expected)
  }
)

test.each([[1, 1, 1], [-1, 2, -0.5], [2, 2, 1]])(
  '%i / %i equals %i', (a, b, expected) => {
    expect(div(a, b)).toBe(expected)
  }
)
