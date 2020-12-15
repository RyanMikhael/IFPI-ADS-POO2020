public class Equipamento {
	
	boolean ligado;
	
	void liga() {
		if (ligado == true){
			return;
		} else {
			ligado = true;
			
		}
	}
		
	void desliga() {
		if (ligado == false) {
			return;
		}
		else {
			ligado = false;
			
		}
	}
	
	boolean estaLigado() {
		return ligado;
	}
	
	void inverte() {
		if(ligado == true) {
			ligado = false;
			return;
			
		} else {
			ligado = true;
			
		}
	}
		

}
