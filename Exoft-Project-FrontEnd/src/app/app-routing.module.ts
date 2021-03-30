import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BadgesComponent} from './badges/badges.component';
import {OrdersComponent} from './orders/orders.component';


const routes: Routes = [
  {path : 'dashboard', component: DashboardComponent},
  {path : 'badges', component: BadgesComponent},
  {path : 'orders', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, BadgesComponent, OrdersComponent]
