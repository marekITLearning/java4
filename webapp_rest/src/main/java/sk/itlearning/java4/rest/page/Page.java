package sk.itlearning.java4.rest.page;


import java.time.LocalDateTime;

import javax.json.Json;
import javax.json.JsonObjectBuilder;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("test")
public class Page {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response doTest() {
		JsonObjectBuilder jb = Json.createObjectBuilder();
		
		jb.add("Aktualny cas", LocalDateTime.now().toString());
		
		return Response.ok(jb.build()).build();
	}
	
}
