import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TodolistComponent } from './todolist/todolist.component';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { MainpageService } from './services/mainpage.service';
import { ChangepasswordService } from "./services/changepassword.service";
import { ChangepasswordComponent } from './changepassword/changepassword.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainpageComponent,
    TodolistComponent,
    ChangepasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
