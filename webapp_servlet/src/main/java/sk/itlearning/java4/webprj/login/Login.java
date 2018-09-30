package sk.itlearning.java4.webprj.login;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;

public class Login extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		String user = req.getParameter("user");
		String password = req.getParameter("password");
		
		if (user != null && !user.isEmpty() && password != null && !password.isEmpty()) {
			InputStream is1 = Login.class.getResourceAsStream("not_authorized.html");
			resp.getWriter().append(IOUtils.toString(is1, StandardCharsets.UTF_8.name()));
			return;
		} else {
			InputStream is1 = Login.class.getResourceAsStream("login.html");
	
			InputStream is2 = getServletContext().getResourceAsStream("/WEB-INF/classes/sk/itlearning/java4/webprj/login/login.html");
	
			String html = IOUtils.toString(is1, StandardCharsets.UTF_8.name());
			
			html = Dictionary.localize(html);
			
			resp.getWriter().append(html);
		}
		
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		super.doPost(req, resp);
	}
	
}
