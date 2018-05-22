package sk.itlearning.java4.a.xml;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import sk.itlearning.java4.book.Catalog;

public class CatalogLoader {

	public static Catalog loadFullCatalog() {

		// JAXB API for loading full xml content
		try {
			JAXBContext jaxbContext = JAXBContext.newInstance(Catalog.class);
			Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
			return (Catalog) jaxbUnmarshaller.unmarshal(Catalog.class.getResourceAsStream("book.xml"));
		} catch (JAXBException e) {
			e.printStackTrace();
			return null;
		}

		// STAX API for reading xml per parts
	}

}
