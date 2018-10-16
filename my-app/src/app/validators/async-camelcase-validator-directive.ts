import { Directive, forwardRef, Injectable } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, first } from 'rxjs/operators';

@Directive({
  selector: '[appAsyncCamelCaseValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => AsyncCamelCaseValidatorDirective),
      multi: true
    }
  ]
})

@Injectable({ providedIn: 'root' })

export class AsyncCamelCaseValidatorDirective implements AsyncValidator {
  validate(c: AbstractControl): Observable<{ [key: string]: any }> {
    return this.validateCamelCaseObservable(c.value)
      .pipe(
        debounceTime(3000),
        distinctUntilChanged(),
        first()
      );
  }

  private validateCamelCaseObservable(username: string) {

    const values: string[] = username.split(' ');
    const camelCaseCtrlOne: string = values[0].substr(0, 1).toUpperCase() + values[0].substr(1).toLowerCase();

    return new Observable(observer => {
      if (values.length === 1 && values[0] === camelCaseCtrlOne) {
        observer.next(null);
      } else if (values.length === 2 && values[1] === values[1].substr(0, 1).toUpperCase() + values[1].substr(1).toLowerCase()) {
        observer.next(null);
      } else {
        observer.next({asyncCamelCaseUsernameInvalid: true});
      }
    });
  }
}
