import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { AgeValidator } from '../validators';
import { UserBirthdayValidator } from '../validators';
import { UserDateOfLoginValidator } from '../validators';
import { UserDateOfFirstNotifyValidator } from '../validators';
import { AsyncUsernameValidatorDirective } from '../validators';
import { AsyncRequiredValidatorDirective } from '../validators';
import { AsyncCamelCaseValidatorDirective } from '../validators';
import { AsyncOnlyLettersValidatorDirective } from '../validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  submittedName: string;
  submittedAge: number;
  submittedBirthday: string;
  submittedDateOfLogin: string;
  submittedDateOfNotify: string;

  userForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
              private asyncUsernameValidator: AsyncUsernameValidatorDirective,
              private asyncCamelCaseValidator: AsyncCamelCaseValidatorDirective,
              private asyncRequiredValidator: AsyncRequiredValidatorDirective,
              private asyncOnlyLettersValidator: AsyncOnlyLettersValidatorDirective) { }

  ngOnInit() {
    this.buildForm();
  }

  submit(): void {
    this.submittedName = this.userForm.value.userName;
    this.submittedAge = this.userForm.value.userAge;
    this.submittedBirthday = this.userForm.value.userBirth;
    this.submittedDateOfLogin = this.userForm.value.userLoginDate;
    this.submittedDateOfNotify = this.userForm.value.userNotifyDate;
    this.submitted = true;
  }

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
