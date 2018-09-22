package sk.itlearning.java4.a.xml;

import java.io.InputStream;
import java.util.List;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import sk.itlearning.java4.book.Book;
import sk.itlearning.java4.book.Catalog;

public class CatalogLoader {

	public static void main(String[] args) {
		Catalog c = getFullCatagalog(CatalogLoader.class.getResourceAsStream("book.xml"));
		List<Book> catalogBooks = c.getBook();
		System.out.println(catalogBooks.size());
	}

	public static Catalog getFullCatagalog(InputStream inputStream) {
		try {
			JAXBContext jaxbContext = JAXBContext.newInstance(Catalog.class);
			Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
			Catalog catalog = (Catalog) jaxbUnmarshaller.unmarshal(inputStream);
			return catalog;
		} catch (JAXBException e) {
			e.printStackTrace();
			return null;
		}
	}

}
