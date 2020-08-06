package sk.itlearning.java4.rest.endpoints;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import com.google.gson.GsonBuilder;

import sk.itlearning.java4.jpa.Rating;
import sk.itlearning.java4.jpa.RatingService;
import sk.itlearning.java4.jpa.TitleService;

@Path("imdb")
public class ImdbData {

	@Inject
	RatingService ratingService;

	@Inject
	TitleService titleService;
	
	@GET
	public Response getTopRated() {
		List<Rating> rating = ratingService.getTop(9.9f);
		GsonBuilder gb = new GsonBuilder();
		return Response.ok(gb.setPrettyPrinting().create().toJson(rating)).build();
	}

}
