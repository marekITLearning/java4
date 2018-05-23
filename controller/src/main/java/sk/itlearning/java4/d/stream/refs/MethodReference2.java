package sk.itlearning.java4.d.stream.refs;

import java.util.Arrays;

public class MethodReference2 {

	public static void main(String[] args) {

		/*
		 * The :: operator separates the method name from the name of an object or class. 
		 * 
		 * object::instanceMethod
		 * 
		 * Class::staticMethod
		 * 
		 * Class::instanceMethod
		 */
		String[] strings = { "B", "c", "d", "a" };
		
		Arrays.asList(strings).forEach(p -> System.out.println(p));
		
		Arrays.sort(strings, (a, b) -> a.compareToIgnoreCase(b));
		
		Arrays.sort(strings, String::compareToIgnoreCase);
		
		Arrays.asList(strings).forEach(System.out::println);
		
		// Math::pow is equivalent to (x, y) -> Math.pow(x, y).
		
		// this::equals is the same as x -> this.equals(x).
		
		
	}
	
}