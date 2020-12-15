public class DecimalNumber {
	
	public int ParteInteira(double number) {
		int inteiro = (int) number;
		return inteiro;
		
	}
	public float ParteDecimal(double number) {
		int inteiro = (int) number;
		float decimal = (float) number % inteiro;
		return decimal;
	}
}