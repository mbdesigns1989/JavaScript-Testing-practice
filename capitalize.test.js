const capitalize = require('./capitalize');

test('capitalize the first letter', () => {
  expect(capitalize('hello')).toMatch('Hello');
});

test('capitalize the first letter', () => {
  expect(capitalize('welcome')).toMatch('Welcome');
})

test('throw error if empty', () => {
  expect(() => {
    capitalize('');
  }).toThrow();
})