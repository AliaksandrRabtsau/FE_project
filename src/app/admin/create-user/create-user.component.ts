import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from '../../services';
import { Router} from '@angular/router';
import { AgeValidator } from '../../validators';
import { UserBirthdayValidator } from '../../validators';
import { AsyncUsernameValidatorDirective } from '../../validators';
import { AsyncRequiredValidatorDirective } from '../../validators';
import { AsyncCamelCaseValidatorDirective } from '../../validators';
import { AsyncOnlyLettersValidatorDirective } from '../../validators';

import { User } from '../../model/user';

import { Store } from '@ngrx/store';
import { AllUsersState } from '../../store/state';
import { CreateUser } from '../../store/actions';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;
  user: User | object;

  constructor(private fb: FormBuilder,
              private asyncUsernameValidator: AsyncUsernameValidatorDirective,
              private asyncCamelCaseValidator: AsyncCamelCaseValidatorDirective,
              private asyncRequiredValidator: AsyncRequiredValidatorDirective,
              private asyncOnlyLettersValidator: AsyncOnlyLettersValidatorDirective,
              private auth: AuthenticationService,
              private router: Router,
              private store: Store<AllUsersState>) {
    this.user = this.auth.getCurrentUser().subscribe(user => { this.user = user; });
  }

  ngOnInit() {
    this.buildForm();
  }

  submit(): void {
    const user: User = {
      name: this.f.userName.value as string,
      password: this.f.userPass.value as string,
      age: this.f.userAge.value as number,
      dateOfBirth: new Date(this.f.userBirth.value).toISOString() as string,
      dateOfFirstLogin: new Date().toISOString() as string,
      dateOfNextNotification: new Date().toISOString() as string,
      information: this.f.userInfo.value as string,
      admin: this.f.admin.value as string
    };
    this.store.dispatch(new CreateUser(user));
    this.router.navigate(['/user-list']);
  }

  get f() { return this.userForm.controls; }

  private buildForm() {
    this.userForm = this.fb.group({
      userName: ['', null, [
        this.asyncRequiredValidator.validate.bind(this.asyncRequiredValidator),
        this.asyncUsernameValidator.validate.bind(this.asyncUsernameValidator),
        this.asyncCamelCaseValidator.validate.bind(this.asyncCamelCaseValidator),
        this.asyncOnlyLettersValidator.validate.bind(this.asyncOnlyLettersValidator)
      ]],
      userPass: ['', [Validators.required]],
      userAge: new FormControl('', { validators: [AgeValidator.userAgeRange(18, 65)], updateOn: 'blur'}),
      userBirth: new FormControl('', { validators: [UserBirthdayValidator.userBirthday], updateOn: 'blur'}),
      userInfo: ['', [Validators.required]],
      admin: ['', [Validators.required]],
    });
  }
}
