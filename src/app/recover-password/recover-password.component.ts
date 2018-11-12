import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services';
import { User } from '../model/user';

import { Observable } from 'rxjs/index';
import { select, Store } from '@ngrx/store';
import { UserState } from '../store/state';
import { ForgotUserPassword } from '../store/actions';
import { getUser } from '../store/selectors/users.selectors';
import { map } from 'rxjs/internal/operators';



@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  recoverForm: FormGroup;
  loading = false;
  submitted = false;
  // recoveredPass: string;
  user$: Observable<User> = this.store.pipe(select(getUser));

  constructor(private fb: FormBuilder,
              private auth: AuthenticationService,
              private store: Store<UserState>) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.recoverForm = this.fb.group({
      username: ['', [Validators.required]]
    });
  }

  get f() { return this.recoverForm.controls; }

  recover() {
    this.submitted = true;
    // this.recoveredPass = '';
    if (this.recoverForm.invalid) {
      return;
    }
    this.loading = true;
    const name = (this.f.username.value).trim();
    // this.store.dispatch(new ForgotUserPassword(name));
    this.store.dispatch(new ForgotUserPassword(name));
    this.loading = false;
    // this.user$ = this.store.pipe(select(getUser));

      // .pipe(
      // map(() => this.loading = false))
      // .subscribe(
      //   (data) => {
      //       this.recoveredPass = data.password;
      //       this.loading = false;
      //     },
      //     (error) => {
      //       this.loading = false;
      //     });
    // this.auth.recoverPass((this.f.username.value).trim())
    //   .subscribe(
    //     (data) => {
    //       this.recoveredPass = data.password;
    //       this.loading = false;
    //     },
    //     (error) => {
    //       this.loading = false;
    //     });
  }

}
