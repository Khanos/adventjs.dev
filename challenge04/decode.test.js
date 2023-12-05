const decode = require('./decode');

test('should fail', () => {
  expect(decode('')).toBe('');
});