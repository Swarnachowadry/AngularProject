import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { TodoComponent } from './todo/todo.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [

  
  {path: 'login' , component: LoginComponentComponent } ,
  {path: 'dashboard' , component: DashboardComponentComponent } ,
  { path: 'todo', component: TodoComponent},
  { path: 'task', component: TaskComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
