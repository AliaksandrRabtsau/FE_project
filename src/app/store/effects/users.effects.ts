import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { catchError, map, mapTo, mergeMap, switchMap, tap, concatMap, pluck } from 'rxjs/operators';

import * as UsersActions from './../actions/users.actions';

import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../model/user';


@Injectable()
export class UsersEffects {

  constructor(private actions$: Actions,
              private userService: UserService,
              private auth: AuthenticationService) {
  }

  @Effect()
  getUser$: Observable<Action> = this.actions$.pipe(
    ofType<UsersActions.GetUser>(UsersActions.UsersActionsTypes.GET_USER),
    switchMap(() => this.auth.getCurrentUser().pipe(
      map((user: User) => new UsersActions.GetUserSuccess(user)),
      catchError(err => of(new UsersActions.GetUserError(err)))
      )
    )
  );

  @Effect()
  logoutUser$: Observable<Action> = this.actions$.pipe(
    ofType<UsersActions.LogoutUser>(UsersActions.UsersActionsTypes.LOGOUT_USER),
    mergeMap(() => this.auth.logout().pipe(
        switchMap(() => [
          new UsersActions.LogoutUserSuccess()
        ]),
        catchError(err => of(new UsersActions.LogoutUserError(err)))
      )
    )
  );

  @Effect()
  forgotUserPassword$: Observable<Action> = this.actions$.pipe(
    ofType<UsersActions.ForgotUserPassword>(UsersActions.UsersActionsTypes.FORGOT_USER_PASSWORD),
    mergeMap((action: UsersActions.ForgotUserPassword) => {
      const name = action.payload;
      return this.auth.recoverPass(name)
        .pipe(
          map((user: User) => new UsersActions.ForgotUserPasswordSuccess(user)),
          catchError(err => of(new UsersActions.ForgotUserPasswordError(err)))
        );
    })
  );

  @Effect()
  updateCurrentUser$: Observable<Action> = this.actions$.pipe(
    ofType<UsersActions.UpdateCurrentUser>(UsersActions.UsersActionsTypes.UPDATE_CURRENT_USER),
    mergeMap((action: UsersActions.UpdateCurrentUser) => this.auth.updateUser(action.payload as User).pipe(
      map((user: User) => new UsersActions.UpdateCurrentUserSuccess(user)),
      switchMap(() => [
        new UsersActions.GetUser()
      ]),
      catchError(err => of(new UsersActions.UpdateCurrentUserError(err)))
      )
    )
  );

  @Effect()
  getUsers$: Observable<Action> = this.actions$.pipe(
    ofType<UsersActions.GetUsers>(UsersActions.UsersActionsTypes.GET_USERS),
    switchMap(action => this.userService.getUsers().pipe(
      map(users => new UsersActions.GetUsersSuccess(users)),
      catchError(err => of(new UsersActions.GetUsersError(err)))
      )
    )
  );

  @Effect()
  createUser$: Observable<Action> = this.actions$.pipe(
    ofType<UsersActions.CreateUser>(UsersActions.UsersActionsTypes.CREATE_USER),
    mergeMap(action => this.userService.addUser(action.payload as User)
      .pipe(
        map(user => new UsersActions.CreateUserSuccess(user)),
        mapTo(new UsersActions.GetUsers()),
        catchError(err => of(new UsersActions.CreateUserError(err)))
      )
    )
  );
}
