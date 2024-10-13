package sk.itlearning.java4.f.stream.methods;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class OtherUsefultStreamTechniques {

	@SuppressWarnings("unused")
	public static void main(String[] args) {

		var numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
		var result = numbers.stream().takeWhile(n -> n < 5).collect(Collectors.toList());
		System.out.println(result); // Output: [1, 2, 3, 4]

		Stream<Integer> infiniteStream = Stream.generate(() -> 1); // Generates an infinite stream of 1s

		Stream<Integer> infiniteStream2 = Stream.iterate(0, n -> n + 1); // Infinite stream of integers starting from 0

		Stream<Double> randomNumbers = Stream.generate(Math::random).limit(10);
		randomNumbers.forEach(d -> System.out.print(d + " | "));

		List<String> upperCaseNames = Stream.of("Alice", "Bob", "Charlie").map(String::toUpperCase)
				.collect(Collectors.toList());

//			Stream.of(): Creates a stream from a specified set of values.
//			Stream.generate(Supplier<T>): Generates an infinite stream of values produced by a supplier function.
//			Stream.iterate(T seed, UnaryOperator<T> f): Generates an infinite stream where each element is computed based on the previous one.
//		
//			2. Intermediate Operations (return a new stream):
//			filter(Predicate<T>): Filters elements based on a condition.
//			Example: stream.filter(x -> x > 10)
//			map(Function<T, R>): Transforms elements in the stream.
//			Example: stream.map(String::toUpperCase)
//			flatMap(Function<T, Stream<R>>): Flattens streams of collections.
//			Example: stream.flatMap(List::stream)
//			sorted(): Sorts the stream elements.
//			Example: stream.sorted(Comparator.naturalOrder())
//			distinct(): Removes duplicate elements from the stream.
//			limit(long maxSize): Truncates the stream to a given length.
//			skip(long n): Skips the first n elements of the stream.
//			
//			3. Terminal Operations (produce a result or side-effect):
//			forEach(Consumer<T>): Performs an action for each element.
//			collect(Collector): Collects the elements into a collection or another structure (like a List, Set, Map).
//			Example: stream.collect(Collectors.toList())
//			reduce(BinaryOperator<T>): Reduces the stream to a single value by repeatedly applying a binary operation.
//			Example: stream.reduce(0, Integer::sum)
//			count(): Returns the number of elements in the stream.
//			findFirst() / findAny(): Finds the first or any element in the stream.
//			anyMatch(Predicate<T>) / allMatch(Predicate<T>) / noneMatch(Predicate<T>): Checks if any, all, or none of the elements match a given condition.
//			min(Comparator<T>) / max(Comparator<T>): Finds the minimum or maximum element based on a comparator.
//			
//			4. Specialized Streams:
//			IntStream, LongStream, DoubleStream: Primitive streams for performance improvements with integer, long, and double values.
//			Example: IntStream.range(1, 10)

	}

}
