import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {ResetPasswordComponent} from './Components/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './Components/forgot-password/forgot-password.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SigninComponent } from './Components/signin/signin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AddNoteComponent } from './Components/add-note/add-note.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddAndDisplayNotesComponent } from './Components/add-and-display-notes/add-and-display-notes.component';
import { DisplayAllNotesComponent } from './Components/display-all-notes/display-all-notes.component';
import { AppIconsComponent } from './Components/app-icons/app-icons.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateNoteComponent } from './Components/update-note/update-note.component';
import { AuthService } from './Services/auth/auth.service';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { ToDoComponent } from './Components/to-do/to-do.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    SigninComponent,
    DashboardComponent,
    AddNoteComponent,
    AddAndDisplayNotesComponent,
    DisplayAllNotesComponent,
    AppIconsComponent,
    UpdateNoteComponent,
    ArchiveComponent,
    TrashComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
