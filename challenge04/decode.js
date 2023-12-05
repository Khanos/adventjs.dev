function decode(message) {
  const parts = message.split(' ');
  const decodedMessage = parts.map(part => {
    const word = part.replace('(', '').replace(')', '').split('').reverse().join('');
    const match = word.match(/^[a-zA-Z]+/);
    return match ? word.slice(match[0].length) + match[0] : word;
  }).join(' ');

  return decodedMessage;
}

module.exports = decode;