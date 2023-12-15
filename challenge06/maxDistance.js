function maxDistance(movements) {
  const leftSteps = (movements.match(/</g) || '').length;
  const rightSteps = (movements.match(/>/g) || '').length;
  const bonus = (movements.match(/\*/g) || '').length;
  return leftSteps - rightSteps > 0 ? leftSteps - rightSteps + bonus : rightSteps - leftSteps + bonus;
}

module.exports = maxDistance;