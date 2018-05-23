package sk.itlearning.java4.c.stream.map;

import java.util.stream.Stream;

public class Map {

	public static void main(String[] args) {

		Stream<String> lower = Stream.of("a", "b", "c", "d");
		
		Stream<String> upper = lower.map(s -> s.toUpperCase());
		
		// Stream<String> upper = lower.map(String::toUpperCase);
		
		upper.forEach(s -> System.out.println(s));
		
		// upper.forEach(System.out::println);
	}

}