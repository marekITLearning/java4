package sk.itlearning.java4.jpa;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "rating", schema = "public")
public class Rating {

	@Id
	private String tconst;
	private Float averagerating;
	private Integer numvotes;

	public String getTconst() {
		return tconst;
	}

	public void setTconst(String tconst) {
		this.tconst = tconst;
	}

	public Float getAveragerating() {
		return averagerating;
	}

	public void setAveragerating(Float averagerating) {
		this.averagerating = averagerating;
	}

	public Integer getNumvotes() {
		return numvotes;
	}

	public void setNumvotes(Integer numvotes) {
		this.numvotes = numvotes;
	}

}