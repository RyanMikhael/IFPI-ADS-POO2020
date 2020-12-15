public class TestaEquipamento {
	public static void main(String args[]) {
		Equipamento eq = new Equipamento();
		eq.ligado = true;
		
		eq.liga();
		
		System.out.println(eq.estaLigado());
		
		eq.desliga();
		
		System.out.println(eq.estaLigado());
		
		eq.inverte();
		
		System.out.println(eq.estaLigado());
		
		
	}
	


}
