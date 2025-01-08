import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardproductComponent} from './dashboardproduct/dashboardproduct.component';
import {ProductComponent} from './product/product.component';
import {AjouterProduitComponent} from './ajouter-produit/ajouter-produit.component';

const routes: Routes = [
  {path:"",component:DashboardproductComponent},
  {path:"product",component:ProductComponent},
  {path:"ajouter-produit",component:AjouterProduitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
