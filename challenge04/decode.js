function decode(message) {
  let prev = '';
  while (prev !== message) {
    prev = message;
    message = message.replace(/\(([^()]+)\)/g, (match, word) => {
      return word.split('').reverse().join('');
    });
  }
  return message;
}

module.exports = decode;