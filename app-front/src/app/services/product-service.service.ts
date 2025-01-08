import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

/*  public getProduct(page:number=1,size:number=7):Observable<Array<Product>>{
    return   this.http.get<Array<Product>>( `http://localhost:8089/products?_page=${page}&_limit=${size}`);
  }*/

}
