const prompt = require('prompt-sync')();

var vetor = [];
var i = 1

while(i <= 20){
    var num = Number(prompt('Digite um numero: '));
    vetor.push(num);
    i += 1;
}

var count = 0;

for (elemento in vetor){
    if (elemento % 2 == 0){
        count += 1;
    }
}

console.log('Há', count + ' numeros pares');