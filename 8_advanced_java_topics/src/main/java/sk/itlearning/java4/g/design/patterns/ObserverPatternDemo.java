package sk.itlearning.java4.g.design.patterns;

import sk.itlearning.java4.h.pattern.observer.DigitalDisplay;
import sk.itlearning.java4.h.pattern.observer.MobileApp;
import sk.itlearning.java4.h.pattern.observer.WeatherStation;

/**
 * BEHAVIORAL PATTERNS OVERVIEW
 * 
 * <p>
 * <b>Chain of Responsibility Pattern</b> Passes a request along a chain of
 * handlers, allowing each handler to either process the request or pass it to
 * the next handler in the chain. Example: In a customer service system,
 * requests are passed from front-line agents to supervisors if not resolved at
 * lower levels.
 * </p>
 * 
 * <p>
 * <b>Command Pattern</b> Encapsulates a request as an object, thereby allowing
 * for parameterization of clients with queues, requests, and operations.
 * Example: In GUI applications, actions like clicking a button can be
 * represented as commands, allowing for undo/redo functionality.
 * </p>
 * 
 * <p>
 * <b>Interpreter Pattern</b> Defines a grammar for a language and provides an
 * interpreter to process sentences in that language. Example: Interpreting
 * expressions in a calculator or scripting languages.
 * </p>
 * 
 * <p>
 * <b>Iterator Pattern</b> Provides a way to access elements of a collection
 * sequentially without exposing its underlying representation. Example:
 * Iterating over a list of items in a shopping cart or a menu.
 * </p>
 * 
 * <p>
 * <b>Mediator Pattern</b> Reduces chaotic dependencies between objects by
 * introducing a mediator object that handles communication between them.
 * Example: Chat room systems where a central server (mediator) handles messages
 * between users.
 * </p>
 * 
 * <p>
 * <b>Memento Pattern</b> Captures and stores the current state of an object,
 * allowing it to be restored later without exposing its internal structure.
 * Example: Saving the state of a document in a text editor so that changes can
 * be undone.
 * </p>
 * 
 * <p>
 * <b>Observer Pattern</b> Defines a one-to-many dependency, so when one object
 * changes state, all its dependents are notified and updated automatically.
 * Example: Implementing a notification system where multiple users are notified
 * of changes in a system.
 * </p>
 * 
 * <p>
 * <b>State Pattern</b> Allows an object to change its behavior when its
 * internal state changes. Example: A vending machine changing behavior
 * depending on whether it has sufficient money or stock.
 * </p>
 * 
 * <p>
 * <b>Strategy Pattern</b> Defines a family of algorithms, encapsulates each
 * one, and makes them interchangeable. Example: Different sorting algorithms
 * (bubble sort, quick sort) can be used interchangeably depending on the
 * context.
 * </p>
 * 
 * <p>
 * <b>Template Method Pattern</b> Defines the skeleton of an algorithm in a
 * method, deferring some steps to subclasses. Example: In a framework, allowing
 * users to define specific behavior while keeping the general structure intact.
 * </p>
 * 
 * <p>
 * <b>Visitor Pattern</b> Separates an algorithm from the object structure on
 * which it operates. Example: Adding functionality to a composite object
 * structure (like a file system) without modifying the objects themselves.
 * </p>
 */

public class ObserverPatternDemo {
	public static void main(String[] args) {
		WeatherStation weatherStation = new WeatherStation();

		DigitalDisplay digitalDisplay = new DigitalDisplay();
		MobileApp mobileApp = new MobileApp();

		weatherStation.registerObserver(digitalDisplay);
		weatherStation.registerObserver(mobileApp);

		weatherStation.setTemperature(25.0f); // Notify observers with the new temperature
		weatherStation.setTemperature(30.0f); // Notify observers again with a different temperature
	}
}
