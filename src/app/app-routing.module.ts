import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { SigninComponent } from './Components/signin/signin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddNoteComponent } from './Components/add-note/add-note.component';
import { AddAndDisplayNotesComponent } from './Components/add-and-display-notes/add-and-display-notes.component';


const routes: Routes = [
  {path: 'signin', component:SigninComponent},
  {path: 'login', component:LoginComponent},
  {path: 'ResetPassword', component:ResetPasswordComponent},
  {path: 'ForgotPassword', component:ForgotPasswordComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'dashboard', component:DashboardComponent,
    children:[
      {path:'',redirectTo:"/dashboard/AddNote",pathMatch:'full'},
      {path:'AddNote', component:AddAndDisplayNotesComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
