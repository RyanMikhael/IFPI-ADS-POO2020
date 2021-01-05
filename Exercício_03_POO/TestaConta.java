
public class TestaConta {

	public static void main(String[] args) {
		Conta c1 = new Conta("1",100);
		Conta c2 = new Conta("2",100);
		
		/*
		é esperado que o resultado seja true já que se pode
		sacar 10 reais da c1
		*/
		System.out.println(c1.sacar(10));
		/*
		é esperado que o resultado seja true já que se pode
		sacar 20 reais da c1
		*/
		System.out.println(c2.sacar(20));
		c1.depositar(5);
		c2.depositar(1);
		/*
		é esperado que o resultado seja true já que se pode
		trasnferir 10 reais da c1 para a c2
		*/
		System.out.println(c1.transferir(c2, 10));
		System.out.println(c1.consultarSaldo());
		System.out.println(c2.consultarSaldo());
		
	}

}
