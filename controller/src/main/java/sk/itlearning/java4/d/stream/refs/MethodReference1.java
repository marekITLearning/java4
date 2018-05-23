package sk.itlearning.java4.d.stream.refs;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class MethodReference1 {

	public static void main(String[] args) {

		JFrame f = new JFrame();
		f.setVisible(true);
		f.setSize(200, 200);
		JButton b = new JButton("Click");
		JPanel p = new JPanel();
		p.add(b);
		f.setContentPane(p);
		
		b.addActionListener(e -> System.out.println(e));
		
		b.addActionListener(System.out::println);
		
	}
	
}