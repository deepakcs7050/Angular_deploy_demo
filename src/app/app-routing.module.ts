import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AccountinfoGuard } from './accountinfo.guard';
import { AddloanComponent } from './addloan/addloan.component';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminMangeComponent } from './admin-mange/admin-mange.component';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ClientComponent } from './client/client.component';
import { CustomvalidationComponent } from './customvalidation/customvalidation.component';
import { LoanTypeComponent } from './loan-type/loan-type.component';
import { LoansComponent } from './loans/loans.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SettingGuard } from './setting.guard';
import { SuperadminGuard } from './superadmin.guard';
import { UnsavedGuard } from './unsaved.guard';

const routes: Routes = [
  {
    path: 'new-loans',
    redirectTo: 'loans'
  },
  {
    path: '',
    component: LoansComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'customer-validation',
    component:CustomvalidationComponent
  },
  {
    path: 'loanType',
    component: LoanTypeComponent,
    resolve: {
      data : AccountinfoGuard
    }
  },
  {
    path: 'loans/add',
    component: AddloanComponent,
    canActivate:[AdminGuard]

  },
  { 
    path: 'admin',
    canActivate:[SuperadminGuard],
    children: [
      {
         path: '', component:AdminComponent
      },
      {
        path:'',
        canActivateChild:[AdminAccessGuard],
        children: [
          { path:'manage', component:AdminMangeComponent},
          { path:'edit', component:AdminEditComponent},
          { path:'delete', component:AdminDeleteComponent}
        ]
      }

    ]
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'product/:productID/photo/:imageID', component: ProductComponent
  },
  {
    path: 'client',
    component: ClientComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'search', component: SearchComponent,
    canDeactivate:[UnsavedGuard]
  },
  { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: 'settings', 
  canLoad: [SettingGuard],
  loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
 },
  {
    path: '**', component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
