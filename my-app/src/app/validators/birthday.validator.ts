import { AbstractControl } from '@angular/forms';

export class UserBirthdayValidator {
  static userBirthday(c: AbstractControl): { [key: string]: boolean } | null {
    const valueUserBirth = c.value.split('/');
    if (valueUserBirth.length !== 3) {
      return {
        'userDateOfBirth': true
      };
    }
    const year = valueUserBirth[0];
    const month = valueUserBirth[1];
    const day = valueUserBirth[2];

    if (year.length !== 4 || month.length !== 2 || day.length !== 2) {
      return {
        'userDateOfBirth': true
      };
    }
    if ((year > 1918 && year < 2019) && (month > 0 && month < 13) && (day > 0 && day < 32)) {
      return null;
    } else {
      return {
        'userDateOfBirth': true
      };
    }
  }
}
