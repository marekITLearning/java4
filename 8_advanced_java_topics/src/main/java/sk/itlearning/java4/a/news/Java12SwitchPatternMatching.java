package sk.itlearning.java4.a.news;

public class Java12SwitchPatternMatching {

	public static void main(String[] args) {

		String day = "MONDAY";
		int numOfLetters;

		switch (day) {
		case "MONDAY":
		case "FRIDAY":
		case "SUNDAY":
			numOfLetters = 6;
			break;
		case "TUESDAY":
			numOfLetters = 7;
			break;
		case "THURSDAY":
		case "SATURDAY":
			numOfLetters = 8;
			break;
		case "WEDNESDAY":
			numOfLetters = 9;
			break;
		default:
			throw new IllegalArgumentException("Unknown day: " + day);
		}

		System.out.println("Number of letters: " + numOfLetters);
		
		// From java 12
		numOfLetters = switch (day) {
		    case "MONDAY", "FRIDAY", "SUNDAY" -> 6;
		    case "TUESDAY" -> 7;
		    case "THURSDAY", "SATURDAY" -> 8;
		    case "WEDNESDAY" -> 9;
		    default -> throw new IllegalArgumentException("Unknown day: " + day);
		};

		System.out.println("Number of letters: " + numOfLetters);

	}

}
