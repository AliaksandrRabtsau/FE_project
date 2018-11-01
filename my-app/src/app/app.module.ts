import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { ValidatorsModule } from './validators/validators.module';

// import { AppRoutingModule, AppRoutingComponents } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LoginComponent } from './login/login.component';

import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { HttpInterceptorProviders } from './interceptors';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
// import { AlertService, AuthenticationService, UserService } from './_services';

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
    AppRoutingModule
  ],
  providers: [
    // AlertService,
    AuthenticationService,
    AuthGuard,
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
