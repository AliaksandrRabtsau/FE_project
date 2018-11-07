import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';


// import { ComboboxComponent } from './user-list/combobox/combobox.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent} ,
  {path: 'recover-password', component: RecoverPasswordComponent
  },
  {
      path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
    { path: 'user-info', component: UserInformationComponent},
    { path: 'user-edit', component: ReactiveFormComponent},
    // { path: 'user-list', component: ComboboxComponent}
    { path: 'user-list', component: UserListComponent}
  ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

