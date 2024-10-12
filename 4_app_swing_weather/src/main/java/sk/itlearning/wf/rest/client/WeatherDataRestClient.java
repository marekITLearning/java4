package sk.itlearning.wf.rest.client;

import java.io.StringReader;

import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import jakarta.ws.rs.client.Invocation;
import jakarta.ws.rs.client.WebTarget;
import jakarta.ws.rs.core.MediaType;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Unmarshaller;
import sk.itlearning.wf.xml.Weatherdata;

public class WeatherDataRestClient {

	public static Weatherdata getByLatLon(String lat, String lon) {
		Client client = ClientBuilder.newClient();
		String target = "https://api.met.no/weatherapi/locationforecast/2.0/classic?lat=" + lat + "&lon=" + lon
				+ "&altitude=90";
		System.out.println(target);
		WebTarget webTarget = client.target(target);
		Invocation.Builder invocationBuilder = webTarget.request(MediaType.APPLICATION_XML);

		String responseString = invocationBuilder.get(String.class);

		try {
			JAXBContext jaxbContext = JAXBContext.newInstance(Weatherdata.class);
			Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
			return (Weatherdata) unmarshaller.unmarshal(new StringReader(responseString));
		} catch (JAXBException e) {
			e.printStackTrace();
			return null;
		}
	}

}
