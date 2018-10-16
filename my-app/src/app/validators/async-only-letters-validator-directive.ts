import { Directive, forwardRef, Injectable } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, first } from 'rxjs/operators';

@Directive({
  selector: '[appAsyncOnlyLettersValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => AsyncOnlyLettersValidatorDirective),
      multi: true
    }
  ]
})

@Injectable({ providedIn: 'root' })

export class AsyncOnlyLettersValidatorDirective implements AsyncValidator {
  validate(c: AbstractControl): Observable<{ [key: string]: any }> {
    return this.validateOnlyLettersObservable(c.value)
      .pipe(
        debounceTime(3000),
        distinctUntilChanged(),
        first()
      );
  }
  private validateOnlyLettersObservable(username: string) {

    return new Observable(observer => {
      const arrayOfSymbolsFromUsernameInput: string[] = [];
      for (const char of username) {
        arrayOfSymbolsFromUsernameInput.push(char);
      }
      for (let i = 0; i < arrayOfSymbolsFromUsernameInput.length; i++) {
        const array = arrayOfSymbolsFromUsernameInput[i].codePointAt(0);
        if ((array < 65 || array > 90) && (array < 97 || array > 122) && array !== 32) {
          observer.next({asyncOnlyLettersUsername: true});
        } else {
          observer.next(null);
        }
      }
    });
  }
}
