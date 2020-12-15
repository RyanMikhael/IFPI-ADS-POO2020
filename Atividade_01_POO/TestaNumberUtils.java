
public class TestaNumberUtils {
	public static void main(String args[]) {
		NumberUtils nu = new NumberUtils();
		
		System.out.println(nu.isPar(10));
		System.out.println(nu.isOdd(11));
		System.out.println(nu.isPrime(11));
		System.out.println(nu.printCount(9));
		System.out.println(nu.printReverseCount(15));
	}

}
