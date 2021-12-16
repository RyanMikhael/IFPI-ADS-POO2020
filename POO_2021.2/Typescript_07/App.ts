// Q 01:
class Calculadora{
    private _operando1: number
    private _operando2: number

    constructor( n1: number, n2: number ){
        this._operando1 = n1
        this._operando2 = n2
    }

    public somar(): number{
        let soma = this._operando1 + this._operando2
        return soma
    }

    public subtracao(): number{
        let sub = this._operando1 - this._operando2
        return sub
    }
}

// Teste da classe calculadora:
let c: Calculadora = new Calculadora(3, 5)
console.log('A soma dos numeros é ' + c.somar())
console.log('A subtracao dos numeros é ' + c.subtracao())
/*  Ao tentar atribuir novos valores aos atributos _operando1 e _operando2, o código não é
compilado corretamente, já que os dois atributos são privados.
*/

// Q 02:
class Hora{
    private _hora: number
    private _minutos: number
    private _segundos: number

    constructor(hora, minutos, segundos){
        if (hora >= 0 && hora <= 23 && minutos >= 0 && minutos <= 59 && segundos >= 0 
        && segundos <= 59){
            this._hora = hora
            this._minutos = minutos
            this._segundos = segundos
        }
        else{
            console.error('Horário inserido de forma errada')
        } 
    }

    public getHora(){
        return this._hora
    }

    public getMinutos(){
        return this._minutos
    }

    public getSegundos(){
        return this._segundos
    }

    public horario(){
        return `${this._hora}:${this._minutos}:${this._segundos}`
    }

}

let h: Hora = new Hora(23, 59, 59)
console.log('O horário inserido foi ' + h.horario())


// Q 03 e 04:

class Conta {
	private numero: String;
	private saldo: number;

    get Numero(){
        return this.numero
    }

    get Saldo(){
        return this.saldo
    }

	constructor(numero: String, saldoInicial: number) {
		this.numero = numero;
		this.saldo = saldoInicial;
	}

	sacar(valor: number): void {
		if (this.saldo >= valor) {
			this.saldo = this.saldo - valor;
        }
	}

	depositar(valor: number): void {
		this.saldo = this.saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

}

class Banco {
	private contas: Conta[] = [];
	
	public inserir(conta: Conta): void {
        let count: number = 0;
        if (this.contas.length < 1){
            this.contas.push(conta);
        }
        else{
            for (let i = 0; i < this.contas.length; i++){
                if (this.contas[i].Numero == conta.Numero){
                    count += 1;
                }
                
            }

            if ( count != 1) {
                this.contas.push(conta);
            }

        }
		
	}
	
	public consultar(numero: String): Conta {
		let contaConsultada: Conta;
		for (let conta of this.contas) {
			if (conta.Numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	private consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].Numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	public alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.Numero);
		if (indice != -1) {
			this.contas[indice] = conta;
		}
	}

	public excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1];
			}

			this.contas.pop();
		} 
	}

	public depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

    public sacar(numero: String, valor: number){
        let contaConsultada = this.consultar(numero)
        contaConsultada.sacar(valor)
    }

    public transferir(numeroCredito: String, numeroDebito: String, valor: number){
        let contaInicial = this.sacar(numeroCredito, valor)
        let contaDestino = this.depositar(numeroDebito, valor)
        
    }

    public quantidadeContas(): number{
        return this.contas.length
    }

    public totalDinheiro(): number{
        let total = 0
        for (let i = 0; i < this.contas.length; i ++){
            total += this.contas[i].Saldo;
        }

        return total
    }

    public mediaSaldo(){
        let qtdContas = this.quantidadeContas()
        let dinheiro = this.totalDinheiro()
        let media = dinheiro/qtdContas

        return media.toFixed(1)
    }
}
