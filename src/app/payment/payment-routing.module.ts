import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FailureComponent } from '../failure/failure.component';
import { SucessComponent } from '../sucess/sucess.component';

import { PaymentComponent } from './payment.component';

const routes: Routes = [
  { path: '', component: PaymentComponent },
  { path: 'sucess', component: SucessComponent },
  { path: 'failure', component: FailureComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
