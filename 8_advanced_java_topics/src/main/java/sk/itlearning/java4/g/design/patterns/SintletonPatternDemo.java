package sk.itlearning.java4.g.design.patterns;

/**
 * CREATIONAL PATTERNS OVERVIEW
 * 
 * <p>
 * <b>Singleton Pattern</b> Ensures a class has only one instance and provides a
 * global point of access to it. Example: Logger, configuration classes, or
 * database connection pools.
 * </p>
 * 
 * <p>
 * <b>Factory Method Pattern</b> Defines an interface for creating an object,
 * but lets subclasses alter the type of objects that will be created. Example:
 * Creating different types of documents (Word, PDF) without specifying the
 * concrete class.
 * </p>
 * 
 * <p>
 * <b>Abstract Factory Pattern</b> Provides an interface for creating families
 * of related or dependent objects without specifying their concrete classes.
 * Example: GUI toolkits where different families of buttons and windows are
 * created for different operating systems (Windows, Mac).
 * </p>
 * 
 * <p>
 * <b>Builder Pattern</b> Separates the construction of a complex object from
 * its representation, allowing the same construction process to create
 * different representations. Example: Constructing complex objects like a House
 * with optional features (garage, garden, pool).
 * </p>
 * 
 * <p>
 * <b>Prototype Pattern</b> Specifies the kind of objects to create using a
 * prototypical instance, and creates new objects by copying this prototype.
 * Example: When object creation is costly (e.g., in game development, cloning
 * characters or trees for faster creation).
 * </p>
 * 
 * <p>
 * <b>Object Pool Pattern</b> Manages a pool of reusable objects instead of
 * creating and destroying objects on-demand. Example: Database connections,
 * thread pools where reusing objects improves performance.
 * </p>
 */

public class SintletonPatternDemo {

	private static SintletonPatternDemo instance;

	// Private constructor to prevent instantiation
	private SintletonPatternDemo() {
	}

	public static SintletonPatternDemo getInstance() {
		if (instance == null) {
			instance = new SintletonPatternDemo();
		}
		return instance;
	}

	public void log(String message) {
		System.out.println(message);
	}

}
