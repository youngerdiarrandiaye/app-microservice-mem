import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductServiceService} from '../services/product-service.service';

@Component({
  selector: 'app-product',
  standalone: false,

  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  public products:Array<Product> = [];
  public keyword:string="";
  constructor(private productService:ProductServiceService) {
  }
  ngOnInit(){
    this.getProducts();
  }

  getProducts() {
    this.productService.getProduct()
      .subscribe({
        next : data=> {
          this.products = data
        }
      })

    //this.products=this.productService.getProduct();
  }
  //pour faire le cheked des bouton
  handleCheckProduct(product:Product){
    this.productService.checkProduct(product).subscribe({
      next : updatedProduct => {
        product.status = !product.status;
      }
    })
    product.status = product.status;

  }
}
