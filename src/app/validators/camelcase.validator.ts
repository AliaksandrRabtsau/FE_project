import { AbstractControl } from '@angular/forms';

export class CamelCaseValidator {
  static userCamelCase(c: AbstractControl): {[key: string]: boolean} | null {
    const values = c.value.trim().split(' ');
    const camelCaseCtrlOne = values[0].substr(0, 1).toUpperCase() + values[0].substr(1).toLowerCase();
    if (values.length === 1 && values[0] === camelCaseCtrlOne) {
      return null;
    } else if (values.length === 2 && values[1] === values[1].substr(0, 1).toUpperCase() + values[1].substr(1).toLowerCase()) {
      return null;
    }
      return {
        'userNameCamelCase': true
      };
  }
}
