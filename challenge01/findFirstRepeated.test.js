const findFirstRepeated = require('./findFirstRepeated');

test('findFirstRepeated should return the first repeated gift', () => {
  const gifts = [2, 1, 3, 5, 3, 2];
  expect(findFirstRepeated(gifts)).toBe(3);
});

test('findFirstRepeated should return -1 if there are no repeated gifts', () => {
  const gifts = [1, 2, 3];
  expect(findFirstRepeated(gifts)).toBe(-1);
});

test('findFirstRepeated should return -1 for an empty array', () => {
  const gifts = [];
  expect(findFirstRepeated(gifts)).toBe(-1);
});