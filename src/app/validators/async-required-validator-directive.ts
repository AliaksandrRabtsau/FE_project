import { Directive, forwardRef, Injectable } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, first } from 'rxjs/operators';

@Directive({
  selector: '[appAsyncUsernameValidator][formControlName]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => AsyncRequiredValidatorDirective),
      multi: true
    }
  ]
})

@Injectable({ providedIn: 'root' })

export class AsyncRequiredValidatorDirective implements AsyncValidator {

  validate(c: AbstractControl): Observable<{ [key: string]: any }> {
    return this.validateRequiredObservable(c.value)
      .pipe(
        debounceTime(3000),
        distinctUntilChanged(),
        first()
      );
  }
  private validateRequiredObservable(username: string) {
    return new Observable(observer => {
      if (username.length < 2) {
        observer.next({asyncRequiredUsername: true});
      } else {
        observer.next(null);
      }
    });
  }
}
