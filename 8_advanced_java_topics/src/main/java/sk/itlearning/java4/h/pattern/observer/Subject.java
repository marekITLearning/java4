package sk.itlearning.java4.h.pattern.observer;

interface Subject {
	void registerObserver(Observer observer);

	void removeObserver(Observer observer);

	void notifyObservers();
}
