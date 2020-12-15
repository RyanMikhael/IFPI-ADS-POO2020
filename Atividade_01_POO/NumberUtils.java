public class NumberUtils {
	public boolean isPar(int number) {
		if(number % 2 == 0) {
			return true;
		} else {
			return false;
		}
	}
	public boolean isOdd(int number) {
		if (number % 2 == 0) {
			return true;
		} else {
			return false;
		}
	}
	public boolean isPrime(int number) {
		for (int i = 2; i < number; i++) {
			if (number % i == 0) {
				return false;
			}
		}
		return true;	
	}
		
	public String printCount(int number) {
		String count = "";
		for(int i = 0; i <= number; i++) {
			count += i + ", ";
		}
		return count;
	}
	
	public String printReverseCount(int number) {
		String countReverse = "";
		for(int i = 0; number >= i; number--) {
			countReverse += number + ", ";
		}
		return countReverse;
	}
	
}
