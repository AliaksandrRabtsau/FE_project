import { Directive, forwardRef, Injectable } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, first } from 'rxjs/operators';

@Directive({
  selector: '[appAsyncUsernameValidator][formControlName]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => AsyncUsernameValidatorDirective),
      multi: true
    }
  ]
})

@Injectable({ providedIn: 'root' })

export class AsyncUsernameValidatorDirective implements AsyncValidator {

  validate(c: AbstractControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {
    return this.validateUsernameObservable(c.value)
      .pipe(
        debounceTime(3000),
        distinctUntilChanged(),
        first()
      );
  }
  private validateUsernameObservable(username: string) {
    return new Observable(observer => {
      if (username === 'Andrey') {
        observer.next({asyncUsernameInvalid: true});
      } else {
        observer.next(null);
      }
    });
  }
}
