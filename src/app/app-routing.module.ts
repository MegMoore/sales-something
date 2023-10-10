// ng g m app-routing to create new module

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { E404Component } from './e404/e404.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"}, //must always be first
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "**", component: E404Component}  //must always be last
];


@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
