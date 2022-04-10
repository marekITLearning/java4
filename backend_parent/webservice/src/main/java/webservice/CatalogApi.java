package webservice;

import java.io.IOException;
import java.io.InputStream;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import sk.itlearning.java4.a.xml.CatalogLoader;
import sk.itlearning.java4.book.Catalog;

@Path("catalog")
public class CatalogApi {

	@Context
	private HttpServletRequest request;

	@GET
	@Produces(MediaType.APPLICATION_XML)
	public Catalog getCatalog() {
		try (InputStream is = CatalogApi.class.getResourceAsStream("../../../book.xml")) {
			return CatalogLoader.getFullCatagalog(is);
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}
	}

}
