package sk.itlearning.java4.spring.jpa.app;

import java.util.stream.Stream;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface RatingRepository extends PagingAndSortingRepository<Rating, String> {

	@Query("SELECT r FROM Rating r WHERE r.averagerating > :averagerating")
	Stream<Rating> findByRating(@Param("averagerating") float averagerating);
	
}
