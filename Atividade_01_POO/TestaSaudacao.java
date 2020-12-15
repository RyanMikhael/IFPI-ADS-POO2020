
public class TestaSaudacao {
	public static void main(String[] args) {
		Saudacao ts = new Saudacao();
		ts.texto = "Boa noite,";
		ts.destinatario = "Ryan";
		
		System.out.println(ts.ObterSaudacao());
	}
}