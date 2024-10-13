package sk.itlearning.java4.a.news;

public class Java15SimplifiedMultilineString {

	public static void main(String[] args) {

		String oldStyleWithQuotes = "This is a multiline text with quoted parts. "
				+ "This is a quote: \"To be or not to be.\" \n"
				+ "And this is another line. You can use \\n for new lines.";

		System.out.println(oldStyleWithQuotes);

		System.out.println();
		System.out.println("----------------------------------");
		System.out.println();

		String textBlock = """
				This is a multiline text with quoted parts. This is a quote: "To be or not to be"
				And this is another line. You don't need to add newline char when using "java text blocks"
				It's just so much cool and more readable.
				""";

		System.out.println(textBlock);

	}
}
