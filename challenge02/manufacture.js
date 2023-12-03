// First attempt
// function manufacture(gifts, materials) {
//   return gifts.reduce((acc, gift) => {
//     const materialsArray = materials.split('').filter(function(value, index, array) {
//       return array.indexOf(value) === index;
//     });
//     let canBeBuild = true;
//     const giftArray = gift.split('');
//     for (let i = 0; i < giftArray.length; i++) {
//       const giftLetter = giftArray[i];
//       if (materialsArray.indexOf(giftLetter) === -1) {
//         canBeBuild = false;
//         break;
//       }
//     }
//     if (canBeBuild) {
//       acc.push(gift);
//     }
//     return acc;
//   }, []);
// };

// Second attempt
// function manufacture(gifts, materials) {
//   // Convertimos los materiales en un Set para búsquedas rápidas
//   const materialsSet = new Set(materials.split(''));

//   // Filtramos los regalos
//   return gifts.filter(gift => {
//     // Convertimos cada regalo en un array de caracteres
//     const giftLetters = Array.from(gift);

//     // Verificamos si todos los caracteres del regalo están en los materiales
//     return giftLetters.every(letter => materialsSet.has(letter));
//   });
// };

// third attempt - shorter but less readable
function manufacture(gifts, materials) {
  const materialsSet = new Set(materials.split(''));
  return gifts.filter(gift => [...gift].every(giftLetter => materialsSet.has(giftLetter)));
}

module.exports = manufacture;