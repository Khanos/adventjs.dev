const findNaughtyStep = require('./findNaughtyStep');

test('should return the first step that is extra in the original steps', () => {
  const original = 'abcd'
  const modified = 'abcde'
  expect(findNaughtyStep(original, modified)).toBe('e');
});

test('should return the first step that is not in the original steps', () => {
  const original = 'stepfor'
  const modified = 'stepor'
  expect(findNaughtyStep(original, modified)).toBe('f');
});

test('should return empty string if there is not modifications', () => {
  const original = 'abcde'
  const modified = 'abcde'
  expect(findNaughtyStep(original, modified)).toBe('');
});

test('should return empty string if there is not modifications', () => {
  const original = 'xxxx'
  const modified = 'xxoxx'
  expect(findNaughtyStep(original, modified)).toBe('o');
});