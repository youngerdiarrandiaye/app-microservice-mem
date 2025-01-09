package net.diarra.productservice;

import net.diarra.productservice.entities.Product;
import net.diarra.productservice.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;

@SpringBootApplication
public class ProductServiceApplication {
	public static void main(String[] args) {
		SpringApplication.run(ProductServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(ProductRepository productRepository ) {
		return args -> {
				// Create product
				Product product = Product.builder()
						.name("PC")
						.quantity(6)
						.status(false)
						.build();
				Product product1 = Product.builder()
						.name("CLAVIER")
						.quantity(10)
						.status(true)
						.build();
				Product product2 = Product.builder()
						.name("SOURIS")
						.quantity(112)
						.status(true)
						.build();
					// Save users to the database
			productRepository .save(product);
			productRepository .save(product1);
			productRepository .save(product2);
			};
	}

}
