package sk.itlearning.java4.c.stream.map;

import java.util.List;
import java.util.Optional;

import sk.itlearning.java4.a.xml.CatalogLoader;
import sk.itlearning.java4.book.Book;

public class Reduction {

	public static void main(String[] args) {
		
		List<Book> list = CatalogLoader.getFullCatagalog().getBook();
		
		List<Book> filtered = null;
		
		Optional<Book> ops = list.stream()
				.filter(e -> e.getPrice() < 50f)
				.max( (a, b) -> Float.valueOf(a.getPrice()).compareTo(Float.valueOf(b.getPrice())));
		
		ops.ifPresent(v -> v.setPrice(100));
		
		ops.ifPresent(v -> System.out.println(v.getId()));
		
		Book b = ops.orElse(new Book());
		
	}
	
}
