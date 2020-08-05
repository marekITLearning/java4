package sk.itlearning.java4.rest.endpoints;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;

import sk.itlearning.java4.jpa.Rating;
import sk.itlearning.java4.jpa.RatingService;

@Path("imdb")
public class ImdbData {

	@Inject
	RatingService ratingService;

	@GET
	public Response getTopRated() {
		Rating rating = ratingService.find("tt0050536");
		return Response.ok(new Gson().toJson(rating)).build();
	}

}
