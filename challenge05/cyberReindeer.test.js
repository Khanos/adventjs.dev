const cyberReindeer = require('./cyberReindeer');

describe("Challenge 05 - cyberReindeer", () => {

  it('should handle a road', () => {
    expect(Array.isArray(cyberReindeer('S..|...|..', 10))).toBe(true);
    expect(cyberReindeer('S..|...|..', 10)).toStrictEqual([
      'S..|...|..', // estado inicial
      '.S.|...|..', // avanza el trineo la carretera
      '..S|...|..', // avanza el trineo la carretera
      '..S|...|..', // el trineo para en la barrera
      '..S|...|..', // el trineo para en la barrera
      '...S...*..', // se abre la barrera, el trineo avanza
      '...*S..*..', // avanza el trineo la carretera
      '...*.S.*..', // avanza el trineo la carretera
      '...*..S*..', // avanza el trineo la carretera
      '...*...S..', // avanza por la barrera abierta
    ]);
  });
`
  // it('should fail', () => {
  //   expect(true).toBe(false);
  // });`
});