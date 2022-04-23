package sk.itlearning.java5.webservicejpa;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Zakaznik {

	@Id
	private long id;
	private String name;
	private int vek;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getVek() {
		return vek;
	}

	public void setVek(int vek) {
		this.vek = vek;
	}

}
