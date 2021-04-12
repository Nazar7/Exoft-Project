import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '../app/material.module';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { PersonalAchieveComponent } from '../app/dashboard/personal-achieve/personal-achieve.component';
import { ThankYouComponent } from '../app/dashboard/thank-you/thank-you.component';
import { ChallengesComponent } from './dashboard/challenges/challenges.component';
import { TopChartComponent } from './dashboard/top-chart/top-chart.component';
import { ExofAchevementsComponent } from './dashboard/exof-achevements/exof-achevements.component';
import {BadgesBlockComponent} from './dashboard/badges-block/badges-block.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    OrdersComponent,
    PersonalAchieveComponent,
    ThankYouComponent,
    ChallengesComponent,
    TopChartComponent,
    ExofAchevementsComponent,
    BadgesBlockComponent,
    SidebarComponent
    // ScrollingModule,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
