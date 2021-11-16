// Q 01:

let numeros: number[] = [2, 4, 3, 6, 3];
let soma: number = 0;

for(let i in numeros){
    soma += numeros[i];
}

let resultado: string = `Questao 01:\nA soma dos numeros da array é igual a ${soma}`;
console.log(resultado);

// Q 02:

/*
let a : number[] = [1,2,3,4,5];
for (let i : number = 0; i <= a.length; i++) {
console.log(a[i]);
}

O código acima entrega como resultado os valores 1, 2, 3 ,4 , 5 e undefined, já que ao declarar
a variavel "i" com valor igual a 0 e acrescentar 1 até que ela se iguale ao valor do tamanho da
array, faz com que o valor undefined seja imprimido no console já que a array nao possui nenhum
valor com indice igual ao seu tamanho.
*/

// Q 03:
let numbers_10: number[] = [1,2,3,4,5,6,7,8,9,10];

let resultado3: string = `\nQuestao 03:\nordem crescente: ${numbers_10}
Ordem descrescente: ${numbers_10.reverse()}`;
console.log(resultado3);

// Q 04:
let str: string = 'Instituto Federal do Piauí';
let resultado4: string = `Questao 04:
a) ${str.toUpperCase()}
b) ${str.charAt(10)}
c) ${str.indexOf('o')}
d) ${str.split(' ')}`

console.log(resultado4);