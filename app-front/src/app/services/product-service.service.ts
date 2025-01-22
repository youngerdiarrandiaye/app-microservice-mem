import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  public  saveProduct(product: Product):Observable<Product> {
    //return    this.http.post<Product>("http://app-memoire-gateway-service:8888/PRODUCT-SERVICE/api/saveProduct", product);
    return   this.http.post<Product>("http://localhost:8888/PRODUCT-SERVICE/api/saveProduct", product);
  }
  public getProduct():Observable<Array<Product>>{
    //return   this.http.get<Array<Product>>( "http://app-memoire-gateway-service:8888/PRODUCT-SERVICE/api/product");
    return   this.http.get<Array<Product>>( "http://localhost:8888/PRODUCT-SERVICE/api/product");
    //return   this.http.get<Array<Product>>( `http://localhost:8082/api/product`);
  }
  public checkProduct(product:Product):Observable<Product>{
    return    this.http.patch<Product>("http://localhost:8888/PRODUCT-SERVICE/api/product/${product.id}",
      {status:!product.status});
  }
}
