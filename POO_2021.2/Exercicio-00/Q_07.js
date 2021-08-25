const prompt = require('prompt-sync')();

var vetor = [];
var i = 1

while(i <= 5){
    var num = Number(prompt('Digite um numero: '));
    vetor.push(num);
    i += 1;
}

console.log('O vetor é', vetor);