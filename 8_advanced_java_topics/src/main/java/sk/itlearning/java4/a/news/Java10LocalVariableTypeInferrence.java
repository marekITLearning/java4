package sk.itlearning.java4.a.news;

import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.List;

public class Java10LocalVariableTypeInferrence {

	public static void main(String[] args) throws FileNotFoundException {

		List<String> list = Arrays.asList("a", "b", "c");

		for (String item : list) {
			System.out.println(item);
		}

	}

}
