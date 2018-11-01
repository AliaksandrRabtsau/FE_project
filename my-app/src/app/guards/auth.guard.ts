import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isAuthenticated()
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

  // throwOut() {
  //   this.navigateLogin();
  //   return of(false);
  // }
  //
  // navigateLogin() {
  //   this.router.navigate(['/login']);
  // }
  //
  // allowRoute() {
  //   return true;
  // }
}

// canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
//   if (this.auth.isAuthenticated()) {
//   return of(true)
// } else {
//   this.router.navigate(['/login'], {
//     queryParams: {
//       accessDenied: true
//     }
//   })
//   return of(false)
// }
// }
