const prompt = require('prompt-sync')();

const num1 = prompt('Insira um valor: ');

const num2 = prompt('Insira um valor diferente: ');

const num3 = prompt('Insira um valor diferente: ');

let menor = Math.min(num1,num2,num3);

console.log('O menor numero é', menor);