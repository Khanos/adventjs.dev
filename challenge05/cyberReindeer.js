function cyberReindeer(road, time) {
  let roadArray = road.split('');
  const result = [];
  let isOpen = false;
  let isWaiting = false;
  let delay = 0;
  for (let i = 0; i < time; i++) {
    const shouldOpen = i !== 0 && i % 5 === 0;
    if (shouldOpen) {
      isOpen = !isOpen;
      if(isOpen) {
        isWaiting = false;
      }
    }
    roadArray = roadArray.map((item) => {
      if (/[|*]/g.test(item)) {
        if (isOpen) {
          return '*';
        } else {
          return '|';
        }
      }
      return item;
    });
    if(i === 0) {
      result.push(roadArray.join(''));
    } else if(roadArray[i] !== '|' && !isWaiting) {
      roadArray[i-delay] = 'S';
      roadArray[i-1-delay] = /[|*]/g.test(road.split('')[i-1-delay]) ? (isOpen ? '*' : '|') : '.';
      result.push(roadArray.join(''));
    } else {
      isWaiting = true;
      delay++;
      result.push(roadArray.join(''));
    }
  }
  return result;
}

module.exports = cyberReindeer;