const createMenu = require('../src/restaurant');
 
/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

*/
const meuRestaurante = createMenu({ food: { coxinha: 3.9, sopa: 9.9 }, drink: { agua: 3.9, cerveja: 6.9 } });

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  
  it('TEST 1: Check if the return of the `createMenu()` function is an object that has a `fetchMenu` key, which has a function as its value', () => {
    expect(typeof meuRestaurante.fetchMenu).toBe('function');
  });
    
  it('TEST 2: Check that `meuRestaurante.fetchMenu()` returns an object whose keys are only `food` and `drink`', () => {
    expect(Object.keys(meuRestaurante.fetchMenu())).toEqual(['food', 'drink']);
  });

  it('TEST 3: Check if the menu passed to the `createMenu` function is identical to the menu retrieved by the `meuRestaurante.fetchMenu` function', () => {
    expect(meuRestaurante.fetchMenu()).toEqual({ food: { coxinha: 3.9, sopa: 9.9 }, drink: { agua: 3.9, cerveja: 6.9 } });
  });

  it('TEST 4: Check that `meuRestaurante.consumption`, after creating the menu, returns an empty array.', () => {
    expect(meuRestaurante.consumption).toEqual([]);
  });

  it('TEST 5: Check that when calling a function associated with the `order` key in the returned object, passing a string as a parameter like `meuRestaurante.order(`coxinha`)`, such string is added to the array returned in `ObjectReturned.consumption`.', () => {
    meuRestaurante.order('coxinha');
    expect(meuRestaurante.consumption).toEqual(['coxinha']);
  });

  it('TEST 6: Check if, when adding three orders, among drinks and food, the `objectReturned.consumption` array contains the ordered items.', () => {
    meuRestaurante.consumption = [];
    meuRestaurante.order('coxinha');
    meuRestaurante.order('agua');
    meuRestaurante.order('sopa');
    meuRestaurante.order('sashimi');
    expect(meuRestaurante.consumption).toEqual(['coxinha', 'agua', 'sopa', 'sashimi']);
  });

  it('TEST 7: Check if the `order` function accepts that repeated orders are added to consumption.', () => {
    meuRestaurante.consumption = [];
    meuRestaurante.order('coxinha');
    meuRestaurante.order('agua');
    meuRestaurante.order('coxinha');
    expect(meuRestaurante.consumption).toEqual(['coxinha', 'agua', 'coxinha']);
  });
  it('TEST 8: Check that, when calling `meuRestaurante.pay()`, the sum of the prices of everything that was ordered is returned, as recorded in `meuRestaurante.consumption`', () => {
    expect(meuRestaurante.pay()).toBeCloseTo(12.87);
  });
});
