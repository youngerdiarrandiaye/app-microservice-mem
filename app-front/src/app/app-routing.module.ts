import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardproductComponent} from './dashboardproduct/dashboardproduct.component';
import {ProductComponent} from './product/product.component';
import {AjouterProduitComponent} from './ajouter-produit/ajouter-produit.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path:"",component:DashboardproductComponent},
  {path:"product",component:ProductComponent,canActivate : [AuthGuard], data : {roles :['ADMIN']}},
  {path:"ajouter-produit",component:AjouterProduitComponent,canActivate : [AuthGuard], data : {roles :['ADMIN']}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
