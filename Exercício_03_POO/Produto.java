
public class Produto {
	int codigo, quantidade, quantidadeMinima;
	String descriçao;
	double valor;
	
	boolean baixar(int quantidade) {
		if(quantidade < quantidadeMinima) {
			return false;
		}
		else {
			this.quantidade -= quantidade;
			return true;
		}
	}
	void repor(int quantidade) {
		this.quantidade += quantidade;
	}
	
	
	Produto(int codigo, String descriçao, double valor, int quantidade, int quantidadeMinima){
		this.codigo = codigo;
		this.descriçao = descriçao;
		this.valor = valor;
		this.quantidade = quantidade;
	}
	
	void reajusta(double taxa) {
		valor = valor + (valor * (taxa/100));
	}
	public String toString() {
		return "Representação textual:" + this.codigo + this.quantidade + this.descriçao + this.valor;
	}
	boolean equal(Produto produto) {
		if (this.codigo == produto.codigo) {
			return true;
		}
		else {
			return false;
		}
	}
	

}
