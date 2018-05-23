package sk.itlearning.java4.c.stream.map;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class Map {

	public static class Nabytok {
		private int vyska;

		public int getVyska() {
			return vyska;
		}

		public void setVyska(int vyska) {
			this.vyska = vyska;
		}
		
	}
	public static void main(String[] args) {

		Nabytok n1 = new Nabytok();
		n1.setVyska(10);
		
		Nabytok n2 = new Nabytok();
		n2.setVyska(20);
		
		Nabytok[] charArr = new Nabytok[]{n1, n2};
		
		List<Nabytok> listN = Arrays.asList(charArr);
		
		for (Nabytok p : listN) {
			p.setVyska(30);
		}
		
		for (Nabytok p : listN) {
			System.out.println(p.vyska);
		}
		
		Stream<String> lower = Stream.of("a", "b", "c", "d");
		
		Stream<String> upper = lower.map(s -> s.toUpperCase());
		
		// Stream<String> upper = lower.map(String::toUpperCase);
		
//		upper.forEach(s -> System.out.println(s));
		
		upper.forEach(System.out::println);
	}

}