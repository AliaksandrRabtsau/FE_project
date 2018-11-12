import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private auth: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.auth.isAuthenticated()
      .pipe(
        map(() => {
          return true;
        }),
        catchError(() => {
          this.router.navigate(['/login']);
          return of(false);
        })
      );
  }
}
