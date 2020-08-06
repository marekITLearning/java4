package sk.itlearning.java4.spring.jpa.app;

import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AppSpringJpaApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppSpringJpaApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(RatingRepository ratingRepository) {
		return (args) -> {
			Stream<Rating> top = ratingRepository.findByRating(7f);
			
			System.out.println(Runtime.getRuntime().freeMemory()/1024);
			
//			for (int i = 0; i < top.size(); i++) {
//				if (i % 1000 == 0) {
//					System.out.println(i + " " + Runtime.getRuntime().freeMemory()/1024);
//				}
//			}
		};
	}

}
