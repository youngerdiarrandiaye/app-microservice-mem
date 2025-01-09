package net.diarra.productservice.repository;

import net.diarra.productservice.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;



public interface ProductRepository extends JpaRepository<Product,Long> {
}
