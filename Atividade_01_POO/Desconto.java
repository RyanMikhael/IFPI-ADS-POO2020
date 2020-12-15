public class Desconto {
	public double calcula(float valorOriginal, float desconto) {
		float valorCalculado = valorOriginal * (1 - (desconto/100));
		return valorCalculado;	
	}
}
