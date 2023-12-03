const findFirstRepeated = (gifts) => {
  const map = new Map();

  for (let i = 0; i < gifts.length; i++) {
    const id = gifts[i];

    if (map.has(id)) {
      return id; // first repeated gift and we're done
    } else {
      map.set(id, i); // store the index of the gift and keep going
    }
  }

  return -1; // no repeated gifts
};

module.exports = findFirstRepeated;