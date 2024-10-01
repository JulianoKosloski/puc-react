const maiuscula = require('./maiuscula');

test('aplica caps em "hello"', () => {
  expect(maiuscula('hello')).toBe('Hello');
});

test('nao altera o "Hello" pois ja eh maiuscula', () => {
  expect(maiuscula('Hello')).toBe('Hello');
});