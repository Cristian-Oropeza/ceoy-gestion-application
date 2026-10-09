const multiplicar = require('./math');

test('multiplicar 2 y 3 debe ser 6', () => {
    expect(multiplicar(2, 3)).toBe(6);
});

test('multiplicar 5 y 6 debe ser 30', () => {
    expect(multiplicar(5, 6)).toBe(30);
});

test('multiplicar 10 y 2 debe ser 20', () => {
    expect(multiplicar(10, 2)).toBe(20);
});

test('multiplicar 4 y 3 debe ser 12', () => {
    expect(multiplicar(4, 3)).toBe(12);
});