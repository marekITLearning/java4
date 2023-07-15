package sk.itlearning.java4.f.zadanie;

import java.util.Scanner;

public class ParkovaciSystem {

	public static void main(String[] args) {

		Scanner s = new Scanner(System.in);
		
		System.out.println("Zadaj pocet hodin parkovania pre 3 auta");
		
		double h1 = s.nextDouble();
		double h2 = s.nextDouble();
		double h3 = s.nextDouble();
		
		s.close();
		
		System.out.println("Auto\tHodiny\tPoplatky");
		System.out.println("1\t" + h1 + "\t" + spocitajPoplatky(h1));
		System.out.println("2\t" + h2 + "\t" + spocitajPoplatky(h2));
		System.out.println("3\t" + h3 + "\t" + spocitajPoplatky(h3));
		
	}

	private static double spocitajPoplatky(double h) {
		if (h <= 0) {
			return 0;
		} else if (h > 0 && h <= 3) {
			return 2;
		} else {
			double poplatok = 2 + h * 0.5;
			if (poplatok > 10) {
				poplatok = 10;
			}
			return poplatok;
		}
	}

}
