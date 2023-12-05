const decode = require('./decode');

test('should decode a message with one bad word', () => {
  const message = 'hola (odnum)';
  expect(decode(message)).toBe('hola mundo');
});

test('should decode a message with two bad words', () => {
  const message = '(olleh) (dlrow)!';
  expect(decode(message)).toBe('hello world!');
});

test('should decode a message with multiple bad words', () => {
  const message = 'sa(u(cla)atn)s';
  expect(decode(message)).toBe('santaclaus');
});

test('should decode a message with no bad words', () => {
  const message = 'hola mundo';
  expect(decode(message)).toBe('hola mundo');
});

test('should decode a message with all characters as bad words', () => {
  const message = '(hola)';
  expect(decode(message)).toBe('aloh');
});

test('should decode a message with special characters', () => {
  const message = '(hola!)';
  expect(decode(message)).toBe('!aloh');
});