package sk.itlearning.java4.a.xml;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.List;

import sk.itlearning.java4.catalog.loader.CatalogLoader;
import sk.itlearning.java4.catalog.model.Book;

public class BookCatalogTest {

	public static void main(String[] args) throws FileNotFoundException {

		String cesta = System.getProperty("xmlPath");

		InputStream is = new FileInputStream(new File(cesta));

		List<Book> list = CatalogLoader.getFullCatagalog(is).getBook();

		list.forEach(b -> System.out.println(b.getAuthor()));
	}

}
