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
import { AdminComponent } from './admin/admin.component';

import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './guards/auth.guard';

import { HttpInterceptorProviders } from './interceptors';

import { StoreModule } from '@ngrx/store';
import { allUsersReducer } from './store/reducers';
import { userReducer } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/effects';
import { CreateUserComponent } from './admin/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    LoginComponent,
    HomeComponent,
    UserInformationComponent,
    RecoverPasswordComponent,
    AdminComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ValidatorsModule,
    AppRoutingModule,
    UserListModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('users', allUsersReducer),
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forRoot([UsersEffects]),
    EffectsModule.forFeature([UsersEffects]),
    StoreDevtoolsModule.instrument()

  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
