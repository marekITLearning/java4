import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

public class App {

	private static final String API_URL = "https://api.open-meteo.com/v1/forecast?latitude=48.2132&longitude=17.1504&hourly=temperature_2m&forecast_days=14";

	public static void main(String[] args) {

		HttpURLConnection connection = null;

		try {
			URL url = new URL(API_URL);

			connection = (HttpURLConnection) url.openConnection();

			connection.setRequestMethod("GET");

			if (connection.getResponseCode() == HttpURLConnection.HTTP_OK) {

				String responseBody = new String(connection.getInputStream().readAllBytes());

				String afterHourlyTime = responseBody.split("\"time\":\\[")[1];

				String[] dateAndTempParts = afterHourlyTime.split("\\]\\,\"temperature_2m\":\\[");

				String dates = dateAndTempParts[0];

				String temperatures = dateAndTempParts[1].replace("]}}", "");

				String[] datesArray = dates.split(",");

				String[] temperaturesArray = temperatures.split(",");

				double maxTemperature = -100;
				int indexForMaxTemperature = 0;

				for (int i = 0; i < temperaturesArray.length; i++) {
					double d = Double.valueOf(temperaturesArray[i]);
					if (d > maxTemperature) {
						maxTemperature = d;
						indexForMaxTemperature = i;
					}
				}

				System.out.println("Najvyššia teplota počas nasledujúcich 14 dní bude " + maxTemperature
						+ " stupňov Celzia dňa " + datesArray[indexForMaxTemperature]);

			} else {
				System.out.println("GET request failed: " + connection.getResponseCode());
			}
		} catch (IOException e) {
			throw new RuntimeException(e);
		} finally {
			connection.disconnect();
		}

	}

}
