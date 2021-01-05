Q 01:
Não, pois no caso específico a variável é um atributo e os atributos inteiros que não são inicializados em JAVA, ele os inicializa com o valor 0.

Q 02:
Ocorrerá um erro de compilação, já que a classe Hotel não possui um construtor que receba um parametro.

Q 03:
O resultado é 0. Isso porque na instrução de print usa-se o this para referenciar o atributo da classe, esse que não é inicializado e por isso recebe o valor 0.

Q 04:
escrito dessa forma o método se torna de dificil leitura, já que o atributo e o parametro possuem o mesmo nome.
A maneira correta da escrita do código seria:

void x(double valor){
    this.valor = valor + valor;
}

Q 05:
O erro de compilação ocorre devido o fato do construtor Radio() não ter sido definido.
Uma solução seria:
Declarar o construtor correto que é aquele que possui parametro volume e também declarar um retorno para o construtor.

Q 06:
a) Os dois prints retornam o valor 90. isso se deve ja que as contas são iguais.

b) A partir do momento em que c1 = c2, o endereço de c1 é perdido e passa a apontar para o endereço de c2.

