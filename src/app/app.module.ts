import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoansComponent } from './loans/loans.component';
import { LoanTypeComponent } from './loan-type/loan-type.component';
import { AddloanComponent } from './addloan/addloan.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ClientComponent } from './client/client.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SucessComponent } from './sucess/sucess.component';
import { FailureComponent } from './failure/failure.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminMangeComponent } from './admin-mange/admin-mange.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomvalidationComponent } from './customvalidation/customvalidation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoansComponent,
    LoanTypeComponent,
    AddloanComponent,
    ProductComponent,
    ClientComponent,
    SearchComponent,
    PageNotFoundComponent,
    SucessComponent,
    FailureComponent,
    AdminEditComponent,
    AdminDeleteComponent,
    AdminMangeComponent,
    AdminComponent,
    RegisterComponent,
    CustomvalidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
