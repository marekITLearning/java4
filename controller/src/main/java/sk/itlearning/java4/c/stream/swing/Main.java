package sk.itlearning.java4.c.stream.swing;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class Main {

	public static void main(String[] args) {

		JFrame f = new JFrame();
		f.setSize(200, 200);
		f.setVisible(true);
		f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		JButton b = new JButton("Click");
		
		JPanel jp = new JPanel();
		jp.add(b);
		
		f.setContentPane(jp);
		
		
//		b.addActionListener(new ActionListener() {
//
//			@Override
//			public void actionPerformed(ActionEvent e) {
//				b.setText(b.getText() + "X");
//			} }
//		);
		
		b.addActionListener(e -> b.setText(b.getText() + e.getID()));

	}

}
