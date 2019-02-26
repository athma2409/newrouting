import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component'


const routes: Routes = [
{
  path:"login",
component:LoginComponent
},
{
  path:"logout",
  component:LogoutComponent
},
{
  path:"homePage",
  component:HomePageComponent
},
{
  path:"dashboard",
  component:DashboardComponent
},
{
  path:"",
  redirectTo:"/logout",
  pathMatch:"full"
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
