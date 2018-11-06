import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { WelcomeUIComponent } from './welcome-ui/welcome-ui.component';
import { CustomerUIComponent } from './customer-ui/customer-ui.component';
import { ItemUIComponent } from './item-ui/item-ui.component';
import { SalesOrderUIComponent } from './sales-order-ui/sales-order-ui.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeUIComponent },
  { path: 'customers', component: CustomerUIComponent },
  { path: 'items', component: ItemUIComponent },
  { path: 'sales', component: SalesOrderUIComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
