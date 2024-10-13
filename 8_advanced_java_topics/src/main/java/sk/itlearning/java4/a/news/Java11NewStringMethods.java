package sk.itlearning.java4.a.news;

import java.io.FileNotFoundException;

public class Java11NewStringMethods {

	public static void main(String[] args) throws FileNotFoundException {

		String text = "Hello\nWorld\nJava";
		text.lines().forEach(System.out::println);

		String text2 = "   Hello World   ";
		System.out.println(text2.strip()); // Output: "Hello World"
		System.out.println(text2.stripLeading()); // Output: "Hello World "
		System.out.println(text2.stripTrailing()); // Output: " Hello World"

		String s1 = "   ";
		System.out.println(s1.isEmpty());  // Output: false (This method is from java 1.6)
		
		String s2 = "   ";
		System.out.println(s2.isBlank());  // Output: true

		String s3 = "Hello";
		System.out.println(s3.isBlank());  // Output: false

		String s4 = "Java ";
		String result = s4.repeat(3);
		System.out.println(result);  // Output: "Java Java Java "

		// + new from java 11 - New modern HTTP client supporting HTTP/2 and WebSockets.
	}

}
