package net.diarra.productservice.web;

import net.diarra.productservice.entities.Product;
import net.diarra.productservice.repository.ProductRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {
    private ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository= productRepository;
    }

    @GetMapping("/product")
    public List<Product> product(){
        return productRepository.findAll();
    }

    @GetMapping("/product/{id}")
    public Product productById(@PathVariable Long id ){
        return  productRepository.findById(id).get();
    }
}
