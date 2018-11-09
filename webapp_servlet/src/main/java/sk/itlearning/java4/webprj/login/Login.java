package sk.itlearning.java4.webprj.login;

import java.io.IOException;
import java.time.LocalDateTime;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("login")
public class Login extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		String title = "Current time";
		resp.getWriter().append("<!DOCTYPE html>\n");
		resp.getWriter().append("<html>\n");
		resp.getWriter().append("<head>\n");
		resp.getWriter().append("<title>");
		resp.getWriter().append(title);
		resp.getWriter().append("</title>\n");
		resp.getWriter().append("</head>\n");
		resp.getWriter().append("<h2 style='color:blue'>" + LocalDateTime.now().toString() + "</h2>");
	
//		InputStream is2 = getServletContext().getResourceAsStream("/frontend/src/login.html");
//		String html = IOUtils.toString(is2, StandardCharsets.UTF_8.name());
//		resp.getWriter().append(html);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doGet(req, resp);
	}

}
