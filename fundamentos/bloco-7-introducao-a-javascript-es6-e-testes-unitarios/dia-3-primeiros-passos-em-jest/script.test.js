const { sum, myRemove, myFizzBuzz } = require('./script');

// Parte 1

describe('Teste da função "sum"', () => {
  it('Verifica se a soma entre 4 e 5 retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Verifica se a soma entre 0 e 0 retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Verifica se a soma entre 4 e "5" retorna Error', () => {
    expect(() => sum(4, '5')).toThrow(Error);
  });

  it('Verifica se a soma entre 4 e 5 retorna 9', () => {
    expect(() => sum(4, "5")).toThrow('parameters must be numbers');
  });
});

// Parte 2

describe('Teste da função myRemove', () => {
  it('Tenta remover "3" da lista [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifica se [1, 2, 3, 4] NÃO é o retorno da função', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Se fora do array, o mesmo que sai, entra', () => {
    expect(myRemove(myRemove([1, 2, 3, 4], 5))).toEqual([1, 2, 3, 4]);
  });
});

// Parte 3

describe('Teste da função myFizzBuzz', () => {
  it('Verifica se 75 retorna FizzBuzz', () => {
    expect(myFizzBuzz(75)).toBe('fizzbuzz');
  });

  it('Verifica se 9 retorna Fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Verifica se 50 retorna Buzz', () => {
    expect(myFizzBuzz(50)).toBe('buzz');
  });

  it('Verifica se 7 retorna 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it('Verifica se "75" retorna False', () => {
    expect(myFizzBuzz('75')).toBe(false);
  });
});
