package sk.itlearning.java4.e.pattern.singleton;

public class Singleton {

	// create an object of SingleObject
	private static Singleton instance = new Singleton();

	// make the constructor private so that this class cannot be instantiated
	private Singleton() {
	}

	// Get the only object available
	public static Singleton getInstance() {
		return instance;
	}

	public void showMessage() {
		System.out.println("Hello, I am the only object of type Singleton that might ever exist!");
	}
}
