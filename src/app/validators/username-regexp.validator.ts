import { AbstractControl } from '@angular/forms';

export class UsernameRegExpValidator {
  static userNameOnlyLetters(c: AbstractControl): {[key: string]: boolean} | null {
    const reg = /(^[A-Z]{1}[a-z]*)$/;

    const values = c.value.trim().split(' ');

    if (values.length > 2) {
      return {
        'ValidRegExp': true
      };
    }

    for (let i = 0; i < values.length; i++) {
      if (!reg.test(values[i])) {
        return {
          'ValidRegExp': true
        };
      }
    }

    return null;
  }
}
