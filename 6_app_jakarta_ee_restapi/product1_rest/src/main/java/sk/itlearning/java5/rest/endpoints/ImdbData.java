package sk.itlearning.java5.rest.endpoints;

import java.time.LocalDateTime;

import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import sk.itlearning.java5.model.MovieRequest;

@Path("movie")
public class ImdbData {

//	@Inject
//	TitleService titleService;

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response getMovieByRequestParams(MovieRequest request) {
		return Response.ok(LocalDateTime.now()).build();
	}

}
