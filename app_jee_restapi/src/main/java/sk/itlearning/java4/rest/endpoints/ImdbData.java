package sk.itlearning.java4.rest.endpoints;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("imdb")
public class ImdbData {

	@GET
	public Response getTopRated() {
		return Response.ok("Hello World").build();
	}

}
