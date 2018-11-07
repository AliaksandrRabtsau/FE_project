import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ValidatorsModule } from './validators/validators.module';
import { AppRoutingModule } from './app-routing.module';
import { UserListModule } from './user-list/user-list.module';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';

import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './guards/auth.guard';

import { HttpInterceptorProviders } from './interceptors';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    LoginComponent,
    HomeComponent,
    UserInformationComponent,
    RecoverPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ValidatorsModule,
    AppRoutingModule,
    UserListModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
