/*
Q 01:
Nao, o erro de compilaçao refere-se a falta do this.quantReservas, já que para o atributo ser
acessado dentro dessa classe deve haver o uso desse prefixo no typescript.

*/

// Q 02:
class Hotel {
    constructor(public quantReservas: number){

    }
    adicionarReserva() : void {
    this.quantReservas++;
    }
}

let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);

/* 
Q 03:
Configuraçao inicial da classe e instanciaçao da questao: 

class Radio {

    volume : number;

    constructor(volume : number) {
        this.volume = volume;

    }
}

let r : Radio = new Radio();
r.volume = 10;

O erro ocorre por que no momento em que o objeto é instanciado, o constructor pede que seja inserido
um valor do tipo number para ser atribuido ao atributo volume, esse valor é o parametro de 
inicializaçao.

*/

// Soluçao a seguir:
class Radio {

    volume : number;

    constructor(volume : number) {
        this.volume = volume;

    }
}

let r : Radio = new Radio(5);
console.log(r.volume)
r.volume = 10;
console.log(r.volume)

/*
Q 04:
class Conta {

    numero: String;
    saldo: number;

    constructor(num:String,saldoInicial:number){

        this.numero = num;
        this.saldo = saldoInicial;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    
}

let c1 : Conta = new Conta("1",100);
let c2 : Conta = new Conta("2",100);
c1 = c2;
c1.sacar(10);
c1.transferir(c2,50);

console.log(c1.saldo);
console.log(c2.saldo);


a) O resultado dos dois prints é 90, pois a partir do momento em que ocorre a expressao
c1 = c2, o objeto c1 passa a apontar para o mesmo local de memória que c2 e a partir dai
qualquer alteraçao que ocorra em um desses dois objetos vai ocorrer nos dois.

b)O objeto que anteriormente c1 apontava é desalocado da memória, ou seja, é excluido.

*/

// Q 05:
class Jogador{
    
    constructor(public força: number, public nivel: number, public pontosAtuais: number){}

    nivelAtaque(): number {
        return this.força * this.nivel;

    }

    atacar(j: Jogador){
        j.pontosAtuais = j.pontosAtuais - this.nivelAtaque();

    }

}

let j1: Jogador = new Jogador(10, 1, 1000);
let j2: Jogador = new Jogador(10, 2, 1000);

j1.atacar(j2);
j2.atacar(j1);

console.log('O jogador 1 possui '+ j1.pontosAtuais + ' pontos');
console.log('O jogador 2 possui '+ j2.pontosAtuais + ' pontos');

// Q 06:
class Conta {

    numero: String;
    saldo: number;

    constructor(num:String,saldoInicial:number){

        this.numero = num;
        this.saldo = saldoInicial;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor < 0){
            return false;
        }
        else{
            this.saldo = this.saldo - valor;
            return true;
        }
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor) === false){
            return false;
        } 
        else{
            this.sacar(valor);
            contaDestino.depositar(valor);
            return true;
        }
    }
}

let c1 : Conta = new Conta("1",100);
let c2 : Conta = new Conta("2",100);
console.log(c1.sacar(10));
console.log(c1.transferir(c2,50));

console.log(c1.saldo);
console.log(c2.saldo);

// Q 07:
class Produto{
    constructor(public codigo: String, public descriçao: String, 
                public quantidade: number, public valor: number,
                public quantidadeMinima: number){}

    baixar(quantidade: number){
        if (this.quantidade - quantidade >= this.quantidadeMinima){
            this.quantidade = this.quantidade - quantidade;
        }
    }

    repor(quantidade: number){
        this.quantidade = this.quantidade + quantidade;
    }

    reajustar(taxa: number){
        this.valor = this.valor + (this.valor * (taxa/100));
    }

    toString(){
        console.log('Código do produto: '+ this.codigo + '\nDescriçao: ' + this.descriçao
        + '\nQuant: ' + this.quantidade + '\nQuantidade min. : ' + this.quantidadeMinima
        + '\nvalor: ' + this.valor);
    }

    equals(p: Produto): boolean{
        if(p.codigo == this.codigo){
            return true;
        }
        else{
            return false;
        }
    }

}

let p1: Produto = new Produto('01', 'Biscoito recheado Richester', 25, 2, 3);
let p2: Produto = new Produto('02', 'Coca cola', 48, 3, 12);

p1.baixar(23);
console.log(p1.quantidade);
p1.baixar(3);
console.log(p1.quantidade);
p1.repor(8);
console.log(p1.quantidade);
p1.reajustar(10);
console.log(p1.valor.toFixed(1));
p1.toString();
console.log(p1.equals(p2))