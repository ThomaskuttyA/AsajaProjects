import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AuthGuard } from './gurds/auth.guard';
import { TodolistComponent } from './todolist/todolist.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'todolist', component: TodolistComponent},
 {path:'home',component:MainpageComponent},
 {path:'changepassword',component:ChangepasswordComponent},
  { path: 'mainpage', component: MainpageComponent,canActivate:[AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
