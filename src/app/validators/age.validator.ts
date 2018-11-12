import { AbstractControl, ValidatorFn } from '@angular/forms';

export class AgeValidator {

  static userAgeRange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): {[key: string]: boolean} | null => {
      if (Number.isNaN(+c.value) || c.value < min || c.value > max || !Number.isInteger(+c.value) || c.value.length !== 2) {
        return {
          'RangeUserAge': true
        };
      }
      return null;
    };
  }
}
