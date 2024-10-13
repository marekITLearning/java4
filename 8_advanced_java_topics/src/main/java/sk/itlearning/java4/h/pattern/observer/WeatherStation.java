package sk.itlearning.java4.h.pattern.observer;

import java.util.ArrayList;
import java.util.List;

public class WeatherStation implements Subject {
	private List<Observer> observers = new ArrayList<>();
	private float temperature;

	@Override
	public void registerObserver(Observer observer) {
		observers.add(observer);
	}

	@Override
	public void removeObserver(Observer observer) {
		observers.remove(observer);
	}

	@Override
	public void notifyObservers() {
		for (Observer observer : observers) {
			observer.update(temperature);
		}
	}

	public void setTemperature(float temperature) {
		this.temperature = temperature;
		notifyObservers();
	}
}
