package sk.itlearning.java4.g.design.patterns;

/**
 * STRUCTURAL PATTERNS OVERVIEW
 * 
 * <p>
 * <b>Adapter Pattern</b> Allows incompatible interfaces to work together by
 * creating a bridge between them. Example: Adapting an old payment gateway
 * interface to work with a new e-commerce system.
 * </p>
 * 
 * <p>
 * <b>Bridge Pattern</b> Decouples an abstraction from its implementation,
 * allowing the two to vary independently. Example: Separating the abstraction
 * of different shapes from the implementation of how they are drawn (e.g.,
 * Shape and DrawAPI).
 * </p>
 * 
 * <p>
 * <b>Composite Pattern</b> Composes objects into tree-like structures to
 * represent part-whole hierarchies, allowing clients to treat individual
 * objects and compositions uniformly. Example: A graphical user interface where
 * menus can contain items or submenus, all treated as individual components.
 * </p>
 * 
 * <p>
 * <b>Decorator Pattern</b> Dynamically adds new behavior or functionality to an
 * object without altering its structure. Example: Adding scrollbars to a window
 * or adding different toppings to a pizza.
 * </p>
 * 
 * <p>
 * <b>Facade Pattern</b> Provides a simplified interface to a complex system of
 * classes, libraries, or frameworks. Example: A single API for managing an
 * entire subsystem (e.g., a hotel booking system with a facade for checking
 * availability, booking rooms, and making payments).
 * </p>
 * 
 * <p>
 * <b>Flyweight Pattern</b> Reduces memory consumption by sharing objects when
 * possible, rather than creating new ones. Example: Reusing character objects
 * in a text editor where each letter is represented by the same object if it
 * has the same font and size.
 * </p>
 * 
 * <p>
 * <b>Proxy Pattern</b> Provides a surrogate or placeholder for another object
 * to control access to it. Example: A security proxy that controls access to a
 * sensitive object or a remote proxy that manages network communication for a
 * remote object.
 * </p>
 */

class OldPaymentGateway {
	public void makePayment(double amount) {
		System.out.println("Processing payment of: " + amount + " using the old payment system.");
	}
}

class NewPaymentSystem {
	public void processPayment(double amount, String currency) {
		System.out.println("Processing payment of:" + amount + " " + currency + " using the new payment system.");
	}
}

public class AdapterPatternDemo {

	private OldPaymentGateway oldPaymentGateway;
	private NewPaymentSystem newPaymentSystem;

	public AdapterPatternDemo(OldPaymentGateway oldPaymentGateway) {
		this.oldPaymentGateway = oldPaymentGateway;
	}

	public AdapterPatternDemo(NewPaymentSystem newPaymentSystem) {
		this.newPaymentSystem = newPaymentSystem;
	}

	public void processPayment(double amount, String currency) {
		if (newPaymentSystem != null) {
			newPaymentSystem.processPayment(amount, currency);
		} else if (oldPaymentGateway != null) {
			oldPaymentGateway.makePayment(amount);
		} else {
			throw new RuntimeException("No payment system available for processing payment.");
		}
	}

	public static void main(String[] args) {
		OldPaymentGateway oldGateway = new OldPaymentGateway();
		AdapterPatternDemo paymentAdapter = new AdapterPatternDemo(oldGateway);
		paymentAdapter.processPayment(100, "Eur");
	}

}
