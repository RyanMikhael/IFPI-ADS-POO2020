const prompt = require('prompt-sync')();

var num = 0;

var soma = 0;
var count = -1;

while(num != -1){
    soma += num;
    count += 1;
    var num = Number(prompt('Digite um numero(Digite -1 se quiser parar): '));

}

console.log('A soma dos numeros é igual a', soma);
console.log(count);
let media = soma / count;
console.log('A média aritmética é igual a', media);
