import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductServiceService} from '../services/product-service.service';
import {Product} from '../model/product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-produit',
  standalone: false,

  templateUrl: './ajouter-produit.component.html',
  styleUrl: './ajouter-produit.component.css'
})
export class AjouterProduitComponent implements OnInit{
  public productForm!:FormGroup;
  constructor(private fb:FormBuilder,private productService:ProductServiceService,private router:Router) {
  }
  ngOnInit(): void {
    this.productForm=this.fb.group({
      name:this.fb.control('',[Validators.required,]),
      quantity:this.fb.control(0),
      checked:this.fb.control(false),

    })
  }

  saveProduct() {
    let product:Product=this.productForm.value;
    this.productService.saveProduct(product).subscribe({
      next:data => {
        alert(JSON.stringify(data));
        this.router.navigate(['/product']);
      },error:err => {
        console.log(err);
      }
    });
  }
}

