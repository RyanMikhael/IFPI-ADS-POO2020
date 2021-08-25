const prompt = require('prompt-sync')();

const dolar = prompt('Insira o valor em dolar: ');

let real = dolar * 5;
console.log('O valor inserido em real é igual a', real);