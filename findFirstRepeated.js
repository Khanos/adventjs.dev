const findFirstRepeated = (gifts) => {
  const map = new Map();

  for (let i = 0; i < gifts.length; i++) {
    const id = gifts[i];

    if (map.has(id)) {
      return id;
    } else {
      map.set(id, i);
    }
  }

  return -1;
};

module.exports = findFirstRepeated;