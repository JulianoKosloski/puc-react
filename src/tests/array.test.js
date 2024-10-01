const containsElement = require('./containsElement');

test('array contem 2', () => {
  expect(containsElement([1, 2, 3], 2)).toBe(true);
});

test('array nao contem 4', () => {
  expect(containsElement([1, 2, 3], 4)).toBe(false);
});