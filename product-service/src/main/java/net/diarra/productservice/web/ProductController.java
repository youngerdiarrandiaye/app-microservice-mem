package net.diarra.productservice.web;

import net.diarra.productservice.entities.Product;
import net.diarra.productservice.repository.ProductRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {
    private ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository= productRepository;
    }

    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    @GetMapping("/product")
    public List<Product> product(){
        return productRepository.findAll();
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/product/{id}")
    public Product productById(@PathVariable Long id ){
        return  productRepository.findById(id).get();
    }

    @GetMapping("/auth")
    public Authentication authentication(Authentication authentication){
        return authentication;
    }
}
