
public class TestaProduto {
	public static void main(String args[]) {
		Produto p1 = new Produto(01, "biscoito", 2, 14, 6);
		Produto p2 = new Produto(02, "petisco", 1, 30, 10);
		
		System.out.println(p1.baixar(1));
		System.out.println(p2.baixar(5));
		
		p1.repor(1);
		p2.repor(1);
		
		p1.reajusta(10);
		System.out.println(p1.valor);
		
		System.out.println(p1.toString());
		System.out.println(p2.toString());
		
		System.out.println(p1.equal(p2));
	}
	
	
	

}
