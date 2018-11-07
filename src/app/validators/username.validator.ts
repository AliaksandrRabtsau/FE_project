import { AbstractControl } from '@angular/forms';

export class UserNameOnlyLettersValidator {
  static userNameOnlyLetters(c: AbstractControl): {[key: string]: boolean} | null {
    const arrayOfSymbolsFromUsernameInput: string[] = [];
    for (const char of c.value) {
      arrayOfSymbolsFromUsernameInput.push(char);
    }
    for (let i = 0; i < arrayOfSymbolsFromUsernameInput.length; i++) {
      const array = arrayOfSymbolsFromUsernameInput[i].codePointAt(0);
      if ((array < 65 || array > 90) && (array < 97 || array > 122) && array !== 32) {
        return {
          'LettersUserName': true
        };
      }
    }
    return null;
  }
}
