import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';

const routes: Routes = [

  {path: 'login' , component: LoginComponentComponent } ,
  {path: 'dashboard' , component: DashboardComponentComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
