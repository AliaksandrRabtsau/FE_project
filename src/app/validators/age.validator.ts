import { AbstractControl, ValidatorFn } from '@angular/forms';

export class AgeValidator {

  static userAgeRange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): {[key: string]: boolean} | null => {
      if (c.value !== undefined && (Number.isNaN(+c.value) || c.value < min || c.value > max)) {
        return {
          'RangeUserAge': true
        };
      }
      return null;
    };
  }
}
