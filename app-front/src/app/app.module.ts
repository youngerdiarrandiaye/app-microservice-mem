import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardproductComponent } from './dashboardproduct/dashboardproduct.component';
import { ProductComponent } from './product/product.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardproductComponent,
    ProductComponent,
    AjouterProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
