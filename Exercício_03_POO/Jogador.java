
public class Jogador {
	int força, nivel, pontos;
	
	Jogador(int força, int nivel, int pontos){
		this.força = força;
		this.nivel = nivel;
		this.pontos = pontos;
		
	}
	
	public int pontosDeAtaque(){
		int ataque = força * nivel;
		return ataque;
	}
	
	void atacar(Jogador outroJogador) {
		outroJogador.pontos = this.pontos - outroJogador.pontos;
	}
	

}
