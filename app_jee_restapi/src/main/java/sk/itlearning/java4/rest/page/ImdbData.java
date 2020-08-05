package sk.itlearning.java4.rest.page;

import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("imdb")
public class ImdbData {

	public Response getTopRated() {
		return Response.ok().build();
	}

}
