
public class Saudacao {
	String texto = "Bom dia,";
	String destinatario = "Ryan";
	String ObterSaudacao(){
		return (texto + destinatario);
	}
	public static void main(String[] args) {
		Saudacao saudacao = new Saudacao();
		System.out.println(saudacao.ObterSaudacao());
		
		}
}