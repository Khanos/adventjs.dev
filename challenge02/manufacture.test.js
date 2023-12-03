const manufacture = require('./manufacture');

test('manufacture should return the gifts that can be created with the materials', () => {
  const gifts = ['tren', 'oso', 'pelota']
  const materials = 'tronesa'

  expect(manufacture(gifts, materials)).toEqual(['tren', 'oso']);

  const gifts2 = ['juego', 'puzzle']
  const materials2 = 'jlepuz'
  expect(manufacture(gifts2, materials2)).toEqual(['puzzle']);

  const gifts3 = ['libro', 'ps5']
  const materials3 = 'psli'
  expect(manufacture(gifts3, materials3)).toEqual([]);
});