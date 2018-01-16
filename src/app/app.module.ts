import { MainService } from './services/main.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GridComponent } from './grid/grid.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { RowComponent } from './row/row.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CardComponent,
    ProfileComponent,
    RowComponent,
    DashboardComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent],


})
export class AppModule { }
