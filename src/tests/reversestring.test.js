const reverseString = require('./reversestring');

test('inverte "hello" para "olleh"', () => {
  expect(reverseString('hello')).toBe('olleh');
});