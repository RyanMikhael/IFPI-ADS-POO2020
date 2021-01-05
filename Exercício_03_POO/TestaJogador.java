
public class TestaJogador {
	public static void main(String args[]) {
		Jogador j1 = new Jogador(9,7, 90);
		Jogador j2 = new Jogador(10, 5, 87);
		
		j1.pontosDeAtaque();
		j2.pontosDeAtaque();
		j1.atacar(j2);
		System.out.println(j1.pontos);
		System.out.println(j2.pontos);
	}

}
