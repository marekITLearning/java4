package sk.itlearning.java4.a.xml;

import java.io.File;
import java.util.concurrent.TimeUnit;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;

import sk.itlearning.java4.book.Catalog;

public class CatalogLoader {

	public static Catalog loadFullCatalog() {

		// JAXB API for loading full xml content
		try {
			JAXBContext jaxbContext = JAXBContext.newInstance(Catalog.class);
			Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
			TimeUnit.SECONDS.sleep(5);
			return (Catalog) jaxbUnmarshaller.unmarshal(Catalog.class.getResourceAsStream("book.xml"));
		} catch (JAXBException | InterruptedException e) {
			e.printStackTrace();
			return null;
		}
	}

	public static boolean saveCatalog(Catalog catalog) {

		// JAXB API for loading full xml content
		if (catalog != null && !catalog.getBook().isEmpty()) {
			try {
				JAXBContext jaxbContext = JAXBContext.newInstance(Catalog.class);
				Marshaller jaxbMarshaller = jaxbContext.createMarshaller();
				jaxbMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);
				jaxbMarshaller.marshal(catalog, new File("book.xml"));
				return true;
			} catch (JAXBException e) {
				e.printStackTrace();
			}
		}
		return false;
	}

}
