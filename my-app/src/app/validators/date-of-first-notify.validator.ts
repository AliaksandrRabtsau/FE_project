import { AbstractControl } from '@angular/forms';

export class UserDateOfFirstNotifyValidator {
  static userDateOfFirstNotify(c: AbstractControl): { [key: string]: boolean } | null {
    const valueDateOfFirstNotify = c.value.split('-');
    if (valueDateOfFirstNotify.length !== 3) {
      return {
        'userDateOfFirstNotify': true
      };
    }

    const day = valueDateOfFirstNotify[0];
    const month = valueDateOfFirstNotify[1].toLowerCase();
    const year = valueDateOfFirstNotify[2];

    const arrayOfMonth = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'june', 'jul', 'july', 'aug', 'sep', 'sept', 'oct', 'nov', 'dec'];

    if (day.length === 2 && (day > 0 && day < 32) && arrayOfMonth.indexOf(month) !== -1 && year.length === 2) {
        return null;
    } else {
      return {
        'userDateOfFirstNotify': true
      };
    }
  }
}
