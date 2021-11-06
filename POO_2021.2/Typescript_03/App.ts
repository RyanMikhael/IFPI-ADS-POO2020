/* 
Q 01:
Classes são modelos a partir dos quais os objetos são criados. Essas mesmas
definem os comportamentos e características dos objetos.
Uma classe é como um planejamento e pode gerar mais de um objeto.

Já os objetos sao as classes em execução. E uma de suas pprincipais características é que
possuem atributos e métodos.


Q 02:
Os atributos estão relacionados as caracteristicas e propriedades que os objetos podem possuir.
Além disso, ainda definem o estado daqueles mesmos objetos.
Os métodos já estão relacionados aos comportamentos daquele objeto, ou seja, as ações que
ele pode realizar.
Exemplo:
Objeto -- Conta bancária
Atributos: Nome do titular, numero da conta e saldo.
Métodos: Creditar, debitar, transferir, sacar.
 

Q 03:
Atributos ---- Sistemas em que são importantes ---- Sistemas em que não são importantes

Peso      ----    Sistema que calcula IMC      ---- Sistema de conta bancária
Tipo de CNH ----  Sistema do DETRAN            ---- Cadastro de rede social
Tipo Sanguíneo ---- Sistema de um hospital     ---- Sistema do DETRAN
habilidade destra ---- criação de jogador no PES ---- Cadastro em rede social
Percentual de gordura ---- Sistema de analise de saúde ---- Site de compra de imóveis
Saldo em conta    ---- Sistema de conta bancária ---- Jogos para crianças
Etnia     ---- Sistema de exames que possuem cotas racias/etnicas ---- Site de compras

Q 04:
a) Sim, desde que faça referencia somente ao titular da conta
b) Sim, pois uma pessoa pode posssuir mais de uma conta

Q 05:
Objetos que poderiam ser destacados em um sistema academico:
Aluno, Professor, Disciplina, Turma e Carga horária

Q 06:
Tipo de joo: Rpg

Objeto:
Personagens
    Atributos: nome, vida, arma, forçaAtaque, forçaDefesa, classe, nivel
    Métodos: atacar(), defender(), esquivar(), correr()

Arma:
    Atributos: nome, tipoDeArma, forçaAtaque, raridade

Classe:
    Atributos: nome, vantagens[]

*/

// Q 07:

class Retangulo{

    l1: number;
    l2: number;

    calculeArea(): number{
        return this.l1 * this.l2;
    }

    calculePerimetro(): number{
        return this.l1 + this.l2;
    }

}

let r: Retangulo = new Retangulo();

r.l1 = 5;
r.l2 = 4;
console.log('O perímetro do retangulo é '+ r.calculePerimetro());

// Q 08:

class Circulo{

    r: number;

    calculeArea(): number{
        return Math.pow(this.r, 2) * Math.PI;
    }
    
    calculePerimetro(): number{
        return 2 * Math.PI * this.r;
    }

}

let c: Circulo = new Circulo();

c.r = 5;
console.log('A area do circulo é '+ c.calculeArea().toFixed(2));
console.log('O perímetro do circulo é '+ c.calculePerimetro().toFixed(2));

// Q 09:

class SituacaoFinanceira{

    valorCreditos: number;
    valorDebito: number;

    saldo(): number{
        return this.valorCreditos - this.valorDebito;
    }
}

let sf: SituacaoFinanceira = new SituacaoFinanceira();

sf.valorCreditos = 100;
sf.valorDebito = 200;

console.log('Situaçao financeira '+ sf.saldo())
