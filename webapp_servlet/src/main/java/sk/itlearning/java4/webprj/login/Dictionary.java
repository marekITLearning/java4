package sk.itlearning.java4.webprj.login;

import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Dictionary extends HashMap<String, String> {
	
	private static Dictionary dict = new Dictionary();
	
	static {
		dict.put("%$Login$%", "Prihl\u00E1senie");
		dict.put("%$User Name$%", "Prihlasovacie meno");
	}

	public static String localize(String source) {
		String html = source;
		Pattern p = Pattern.compile("\\%\\$.*\\$\\%");
		Matcher m = p.matcher(source);
		while (m.find()) {
			String s = source.substring(m.start(), m.end());
			String loc = dict.get(s);
			loc = loc != null ? loc : s.replace("%$", "").replace("$%", "");
			html = html.replace(s, loc);
		}
		return html;
	}
	
	
}
