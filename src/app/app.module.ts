import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { E404Component } from './e404/e404.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    HomeComponent,
    AboutComponent,
    E404Component
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
