// Q 01:
class Veiculo{
    private placa: String
    private ano: number
}

class Carro extends Veiculo{
    private modelo: String
}

class CarroEletrico extends Carro{
    private autonomiaBateria: number
}

// Q 02:

class calculadora{
    private _op1: number
    private _op2: number

    constructor(op1: number, op2: number){
        this._op1 = op1
        this._op2 = op2
    }

    public adicionar(): number{
        let soma = this._op1 + this._op2
        return soma
    }
}

let c: calculadora = new calculadora(3, 4)
console.log(c.adicionar())

// Q 03:

class calculadoraCientifica extends calculadora{
    
    public exponenciar(){
        let exponenciacao = this._op1 ** this._op2
        return exponenciacao
    }
}

// Na classe calculadoraCientifica ocorre erro de compilaçao, pois nao é possível acessar
// os atributos _op1 e _op2, o que so é possivel com a implementação de métodos getters e setters


