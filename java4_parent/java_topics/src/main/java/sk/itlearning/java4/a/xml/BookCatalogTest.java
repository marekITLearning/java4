package sk.itlearning.java4.a.xml;

import java.io.InputStream;
import java.util.List;

import sk.itlearning.java4.catalog.loader.CatalogLoader;
import sk.itlearning.java4.catalog.model.Book;

public class BookCatalogTest {

	public static void main(String[] args) {

		InputStream is = BookCatalogTest.class.getResourceAsStream("book.xml");

		List<Book> list = CatalogLoader.getFullCatagalog(is).getBook();

		list.forEach(b -> System.out.println(b.getAuthor()));
	}

}
