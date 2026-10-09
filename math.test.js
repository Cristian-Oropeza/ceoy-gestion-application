const_multiplicar = require('./math');

test('multiplicar 3 por 4 es igual a 12', () => {
    expect(multiplicar(3, 4)).toBe(12);
});

test('multiplicar 2 por 2 es igual a 4', () => {
    expect(multiplicar(2, 2)).toBe(4);
});

test('multiplicar 9 por 9 es igual a 81', () => {
    expect(multiplicar(9, 9)).toBe(81);
});