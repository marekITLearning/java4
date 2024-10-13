package sk.itlearning.java4.h.pattern.observer;

public class MobileApp implements Observer {
	@Override
	public void update(float temperature) {
		System.out.println("Mobile App: Current temperature is " + temperature + "°C");
	}
}