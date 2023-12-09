function cyberReindeer(road, time) {
  let roadArray = road.split('');
  const result = [];
  let isOpen = false;
  let delay = 0;
  for (let i = 0; i < time; i++) {
    const shouldOpen = i !== 0 && i % 5 === 0;
    if (shouldOpen) {
      isOpen = !isOpen;
    }
    if(i-1 >= 0 && roadArray[i-1] === 'S' && (roadArray[i] !== '*' && roadArray[i] !== '|')) {
      roadArray[i-1] = '.'; 
    }
    if(roadArray[i-2] === 'S') {
      roadArray[i-2] = '.';
    }
    roadArray = roadArray.map((item) => {
      if (item === '|' || item === '*') {
        if (isOpen) {
          return '*';
        } else {
          return '|';
        }
      }
      return item;
    });
    if (roadArray[i] === 'S' && result.length === 0) {
      result.push(roadArray.join(''));
    } else if (roadArray[i] === '.') {
      roadArray[i-delay] = 'S';
      result.push(roadArray.join(''));
    } else if (roadArray[i] === '*' || roadArray[i] === '|' ) {
      delay++;
      result.push(roadArray.join(''));
    }
  }
  return result;
}

module.exports = cyberReindeer;