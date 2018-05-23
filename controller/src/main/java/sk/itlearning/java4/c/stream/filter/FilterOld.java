package sk.itlearning.java4.c.stream.filter;

import java.util.List;

import sk.itlearning.java4.b.stream.file.F2;

public class FilterOld {

	public static void main(String[] args) {

		List<String> lines = F2.getBookLines();
		
		int count = 0;
		for (String line : lines) {
			if (line.contains("</book>")) {
				count++;
			}
		}
		
		System.out.println(count);
	}

}