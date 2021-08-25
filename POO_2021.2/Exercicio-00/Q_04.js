const prompt = require('prompt-sync')();

const num = prompt('Insira um valor entre 1 e 12: ');

switch(num){
    case '1':
        console.log('JANEIRO!');
        break;
    case '2':
        console.log('FEVEREIRO!');
        break;
    case '3':
        console.log('MARÇO!');
        break;
    case '4':
        console.log('ABRIL!');
        break;
    case '5':
        console.log('MAIO!');
        break;
    case '6':
        console.log('JUNHO!');
        break;
    case '7':
        console.log('JULHO!');
        break;
    case '8':
        console.log('AGOSTO!');
        break;
    case '9':
        console.log('SETEMBRO!');
        break;
    case '10':
        console.log('OUTUBRO!');
        break;
    case '11':
        console.log('NOVEMBRO!');
        break;
    case '12':
        console.log('DEZEMBRO!');
        break;

    default:
        console.log('Valor inserido inválido, devem ser inseridos valores entre 1 e 12');
        break;
}