
public class TestaEquipamentos {
	
	public static void main(String[] args) {
		Equipamento eq1 = new Equipamento();
		Equipamento eq2 = new Equipamento();
		
		eq1.ligado = true;
		eq2.ligado = true;
		
		eq1.liga();
		eq2.desliga();
		
		eq1.inverte();
		eq2.inverte();
		
		System.out.println("Primeiro equipamento:");
		if(eq1.estaLigado()) {
			System.out.println("Está ligado!");
		}else {
			System.out.println("Está desligado!");
		}
		
		System.out.println("Segundo equipamento:");
		if(eq2.estaLigado()) {
			System.out.println("Está ligado!");
		}else {
			System.out.println("Está desligado!");
		}

	}

}
