import { AbstractControl } from '@angular/forms';

export class UserDateOfLoginValidator {
  static userDateOfLogin(c: AbstractControl): { [key: string]: boolean } | null {
    const valueDateOfLogin = c.value.split(' ');

    if (valueDateOfLogin.length !== 3) {
      return {
        'userDateOfLogin': true
      };
    }

    const day = valueDateOfLogin[0];
    const month = valueDateOfLogin[1].toLowerCase();
    const year = valueDateOfLogin[2];

    const arrayOfMonth = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    if (day.length !== 2 || arrayOfMonth.indexOf(month) === -1 || year.length !== 4) {
      return {
        'userDateOfLogin': true
      };
    }
    if ((year > 1918 && year < 2019) && (day > 0 && day < 32)) {
      return null;
    } else {
      return {
        'userDateOfLogin': true
      };
    }
  }
}
