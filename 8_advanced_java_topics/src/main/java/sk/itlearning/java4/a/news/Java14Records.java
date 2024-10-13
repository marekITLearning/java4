package sk.itlearning.java4.a.news;

public class Java14Records {

	public static class EmployeeJavaBean {

		private String name;
		private double salaray;
		private String department;

		public EmployeeJavaBean(String name, double salary, String department) {
			this.name = name;
			this.salaray = salary;
			this.department = department;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public double getSalaray() {
			return salaray;
		}

		public void setSalaray(double salaray) {
			this.salaray = salaray;
		}

		public String getDepartment() {
			return department;
		}

		public void setDepartment(String department) {
			this.department = department;
		}
	}

	public record Employee(String name, double salary, String department) {
	}

	public static void main(String[] args) {
		
		// Create Employee bean object
		EmployeeJavaBean emp = new EmployeeJavaBean("Alice", 50000, "Engineering");
		
		// Check the object info
		System.out.println(emp);

		// Create Employee record instances
		Employee emp1 = new Employee("Alice", 50000, "Engineering");

		// No need to override toString for the overview of the object
		System.out.println(emp1);

		// Read data
		System.out.println(emp1.department);

		// Modify data - not available. Records are immutable
//		emp1.salary = 1000;

	}

}
