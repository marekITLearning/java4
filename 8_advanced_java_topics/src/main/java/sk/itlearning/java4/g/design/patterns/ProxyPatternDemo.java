package sk.itlearning.java4.g.design.patterns;

public class ProxyPatternDemo {

	/*
	 * Problem - Imagine you are building an image viewer application. This
	 * application allows users to view images, but loading large images from a
	 * remote server takes time and consumes bandwidth. You want to make the
	 * application more efficient by delaying the loading of these large images
	 * until the user actually tries to view them. Without doing this, the
	 * application will be slow to respond because it will load all images upfront,
	 * which isn’t optimal.
	 */

	public static void main(String[] args) {

		/*
		 * Solution - The proxy pattern can be used to handle this scenario by creating
		 * a proxy image that acts as a stand-in for the real image. The proxy will only
		 * load the actual image when it's needed (i.e., when the user clicks on it to
		 * view). Until that moment, the proxy image can display a placeholder or
		 * perform other lightweight tasks.
		 */

		Image image = new ProxyImage("high_resolution_photo.jpg");

		// The image will only be loaded and displayed when needed
		System.out.println("Image not yet loaded.");

		// Now the user decides to display the image, so the real image is loaded
		image.display();

		// If the image is displayed again, it won't be loaded from disk again
		image.display();
	}
}

//Interface that both RealImage and ProxyImage will implement
interface Image {
	void display();
}

//The RealImage class, which loads and displays the actual image
class RealImage implements Image {
	private String filename;

	public RealImage(String filename) {
		this.filename = filename;
		loadFromDisk(filename); // Simulate time-consuming operation
	}

	private void loadFromDisk(String filename) {
		System.out.println("Loading " + filename + " from disk...");
	}

	@Override
	public void display() {
		System.out.println("Displaying " + filename);
	}
}

//Proxy class that controls access to the RealImage
class ProxyImage implements Image {
	private String filename;
	private RealImage realImage;

	public ProxyImage(String filename) {
		this.filename = filename;
	}

	@Override
	public void display() {
		if (realImage == null) {
			// Load the real image only when it's required
			realImage = new RealImage(filename);
		}
		// Delegate the display to the real image
		realImage.display();
	}

}
