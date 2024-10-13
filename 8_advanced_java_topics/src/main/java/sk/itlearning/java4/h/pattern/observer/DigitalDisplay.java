package sk.itlearning.java4.h.pattern.observer;

public class DigitalDisplay implements Observer {
	@Override
	public void update(float temperature) {
		System.out.println("Digital Display: Current temperature is " + temperature + "°C");
	}
}
