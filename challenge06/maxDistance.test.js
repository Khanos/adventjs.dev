const maxDistance = require('./maxDistance');

describe("Challenge 06 - maxDistance", () => {
  test('should calculate the max distance', () => {
    const movements = '>>*<'
    const result = maxDistance(movements);
    expect(result).toBe(2);
  });

  test('should handle empty string', () => {
    const movements = '';
    const result = maxDistance(movements);
    expect(result).toBe(0);
  });

  test('should handle string with no movements', () => {
    const movements = '*';
    const result = maxDistance(movements);
    expect(result).toBe(1);
  });

  test('should handle string with only left movements', () => {
    const movements = '<*<';
    const result = maxDistance(movements);
    expect(result).toBe(3);
  });

  test('should handle string with only right movements', () => {
    const movements = '>*>';
    const result = maxDistance(movements);
    expect(result).toBe(3);
  });

  test('should handle string with equal number of left and right movements', () => {
    const movements = '><*><';
    const result = maxDistance(movements);
    expect(result).toBe(1);
  });
});