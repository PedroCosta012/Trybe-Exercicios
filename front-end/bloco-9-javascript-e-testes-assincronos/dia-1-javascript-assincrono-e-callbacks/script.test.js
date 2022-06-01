const uppercase = require('./script');
const {it, describe, expect} = require('@jest/globals');

describe('Testes do script', () => {
  it('Verifica se o retorno está em upperCase', () => {
    expect(uppercase()).toBe();
  });
});
