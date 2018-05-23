package sk.itlearning.java4.c.stream.filter;

import java.util.List;

import sk.itlearning.java4.b.stream.file.F2;

public class FilterPredicate {

	public static void main(String[] args) {

		List<String> lines = F2.getBookLines();
	
		long count = lines.stream().filter(p -> p.contains("</book>")).count();
		
		System.out.println(count);

	}

}