import { AbstractControl } from '@angular/forms';

export class MaxTwoWordsUsernameValidator {
  static userMaxTwoWords(c: AbstractControl): {[key: string]: boolean} | null {
    const valuesUsernameInput = c.value.trim().split(' ');
    console.log(valuesUsernameInput);
    if (valuesUsernameInput.length > 2) {
      return {
        'userNameMaxTwoWords': true
      };
    }
    return null;
  }
}
