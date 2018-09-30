package sk.itlearning.java4.a.abc;

import java.math.BigDecimal;

public class Cloning {
	
	public static void main(String[] args) {
	
		Obcan o = new Obcan("1234", "Jozo");
		o.setKredit(new BigDecimal(100));

		System.out.println(o.getKredit());

//		Obcan o2 = o.clone();
//
//		Obcan o3 = Obcan.clone(o2);

		
	}
	
}
