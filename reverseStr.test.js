const reverseString = require('./reverseStr');

test('reverse a string', () => {
  expect(reverseString('Mohamed')).toBe('demahoM');
})

test('reverse a string', () => {
  expect(reverseString('Badr')).toBe('rdaB');
})