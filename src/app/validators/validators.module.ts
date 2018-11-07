import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncUsernameValidatorDirective } from '.';
import { AsyncCamelCaseValidatorDirective } from '.';
import { AsyncRequiredValidatorDirective } from '.';
import { AsyncOnlyLettersValidatorDirective } from '.';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AsyncUsernameValidatorDirective,
    AsyncCamelCaseValidatorDirective,
    AsyncRequiredValidatorDirective,
    AsyncOnlyLettersValidatorDirective
  ],
  exports: [
    AsyncUsernameValidatorDirective,
    AsyncCamelCaseValidatorDirective,
    AsyncRequiredValidatorDirective,
    AsyncOnlyLettersValidatorDirective
  ]
})

export class ValidatorsModule { }
