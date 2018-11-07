import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { AuthenticationService } from '../services';
import { Router} from '@angular/router';
import { AgeValidator } from '../validators';
import { UserBirthdayValidator } from '../validators';
import { UserDateOfLoginValidator } from '../validators';
import { UserDateOfFirstNotifyValidator } from '../validators';
import { AsyncUsernameValidatorDirective } from '../validators';
import { AsyncRequiredValidatorDirective } from '../validators';
import { AsyncCamelCaseValidatorDirective } from '../validators';
import { AsyncOnlyLettersValidatorDirective } from '../validators';

import { User } from '../model/user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  user: User | object;

  constructor(private fb: FormBuilder,
              private asyncUsernameValidator: AsyncUsernameValidatorDirective,
              private asyncCamelCaseValidator: AsyncCamelCaseValidatorDirective,
              private asyncRequiredValidator: AsyncRequiredValidatorDirective,
              private asyncOnlyLettersValidator: AsyncOnlyLettersValidatorDirective,
              private auth: AuthenticationService,
              private router: Router) {
    this.user = this.auth.getCurrentUser().subscribe(user => { this.user = user; });
  }

  ngOnInit() {
    this.buildForm();
  }

  submit(): void {
    const params: User = {
      name: this.f.userName.value as string,
      age: this.f.userAge.value as number,
      dateOfBirth: this.f.userBirth.value as string,
      dateOfFirstLogin: this.f.userLoginDate.value as string,
      dateOfNextNotification: this.f.userNotifyDate.value as string
    };
    this.auth.updateUser(params).subscribe(() => {
      this.router.navigate(['/user-info']);
    });
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
      userAge: new FormControl('', { validators: [AgeValidator.userAgeRange(18, 65)], updateOn: 'blur'}),
      userBirth: new FormControl('', { validators: [UserBirthdayValidator.userBirthday], updateOn: 'blur'}),
      userLoginDate: new FormControl('', { validators: [UserDateOfLoginValidator.userDateOfLogin], updateOn: 'blur'}),
      userNotifyDate: new FormControl('', { validators: [UserDateOfFirstNotifyValidator.userDateOfFirstNotify], updateOn: 'blur'})
    });
  }
}
