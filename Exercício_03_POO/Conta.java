
public class Conta {
	String numero;
	double saldo;
	Conta(String numero, int saldo){
		this.numero = numero;
		this.saldo = saldo;
	}
	
	
	boolean sacar(double valor) {
		
		if( saldo - valor < 0) {
			return false;
		}
		else {
			saldo = saldo - valor;
			return true;
		}
	}
	
	void depositar(double valor) {
		saldo = saldo + valor;
	}
	
	double consultarSaldo() {
		return saldo;
	}
	
	boolean transferir(Conta destino, double valor) {
		if(this.sacar(valor) == false) {
			return false;
		}
		else {
			
			destino.depositar(valor);
			return true;
		}
	}

}
