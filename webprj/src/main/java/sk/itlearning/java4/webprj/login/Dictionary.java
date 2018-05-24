package sk.itlearning.java4.webprj.login;

import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Dictionary extends HashMap<String, String> {
	
	private static Dictionary dict = new Dictionary();
	
	static {
		dict.put("%$Login$%", "Prihlásenie");
	}

	public static String localize(String source) {
		Pattern p = Pattern.compile("%$.*$%");
		Matcher m = p.matcher(source);
		while (m.find()) {
			String s = source.substring(m.start(), m.end());
			String loc = dict.get(s);
			source = source.replace(s, loc);
		}
		return source;
	}
	
	
}
