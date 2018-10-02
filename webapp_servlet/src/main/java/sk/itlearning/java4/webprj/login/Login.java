package sk.itlearning.java4.webprj.login;

import java.io.IOException;
import java.time.LocalDateTime;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Login extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		resp.getWriter().append(LocalDateTime.now().toString());
		
//		InputStream is1 = Login.class.getResourceAsStream("login.html");
//
//		InputStream is2 = getServletContext().getResourceAsStream("/WEB-INF/classes/sk/itlearning/java4/webprj/login/login.html");
//
//		String html = IOUtils.toString(is1, StandardCharsets.UTF_8.name());
//
//		resp.getWriter().append(html);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		super.doPost(req, resp);
	}

}
