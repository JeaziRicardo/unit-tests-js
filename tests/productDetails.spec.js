const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(typeof productDetails()).toBe('object');
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails()).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('Alcool gel', 'Máscara')).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const position1 = JSON.stringify(productDetails('Alcool gel', 'Máscara')[0]);
    const position2 = JSON.stringify(productDetails('Alcool gel', 'Máscara')[1]);
    expect(position1 !== position2).toBeTruthy(); // REFERÊNCIA: https://danvitoriano.medium.com/igualdade-entre-objetos-9e1104bd23ea
    // Teste se os dois productIds terminam com 123.
    const endProductIds1 = productDetails('Alcool gel', 'Máscara')[0].details.productId.endsWith('123');
    const endProductIds2 = productDetails('Alcool gel', 'Máscara')[1].details.productId.endsWith('123');
    expect(endProductIds1 === endProductIds2).toBeTruthy();
  });
});
