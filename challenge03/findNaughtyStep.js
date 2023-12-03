// First attempt
// function findNaughtyStep(original, modified) {
//   const originalSteps = new Set(original.split(''));
//   let result;
//   for (let i = 0; i < modified.length; i++) {
//     const step = modified[i];
//     if (!originalSteps.has(step)) {
//       result = step;
//       break;
//     }
//     originalSteps.delete(step);
//   }
//   if (!result && originalSteps.size > 0) result = originalSteps.values().next().value;
//   return !result ? '' : result;
// };

// Second attempt
// function findNaughtyStep(original, modified) {
//   // Create a set of original steps
//   const originalSteps = new Set(original);
//   let result = '';

//   // Iterate through modified steps
//   for (let i = 0; i < modified.length; i++) {
//     const step = modified[i];
//     // If the step is not in the original set, remove it and set it as the result
//     if (!originalSteps.delete(step)) {
//       result = step;
//       break;
//     }
//   }

//   // If no result is found and there are remaining original steps, set the first remaining step as the result
//   if (!result && originalSteps.size > 0) {
//     result = originalSteps.values().next().value;
//   }

//   return result;
// };

// Third attempt
function findNaughtyStep(original, modified) {
  // Create an array of original steps
  const originalSteps = original.split('');
  
  let result = '';

  // Iterate through modified steps
  for (let i = 0; i < modified.length; i++) {
    const step = modified[i];
    // Find the index of the step in the original array
    const index = originalSteps.indexOf(step);
    // If the step is not found in the original array, remove it and set it as the result
    if (index === -1) {
      result = step;
      break;
    }
    // Remove the step from the original array
    originalSteps.splice(index, 1);
  }

  // If no result is found and there are remaining original steps, set the first remaining step as the result
  if (!result && originalSteps.length > 0) {
    result = originalSteps[0];
  }

  return result;
};

module.exports = findNaughtyStep;