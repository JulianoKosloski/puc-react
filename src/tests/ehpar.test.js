const ehPar = require('./ehpar');

test('4 eh par', () => {
  expect(ehPar(4)).toBe(true);
});

test('5 nao eh par', () => {
  expect(ehPar(5)).toBe(false);
});