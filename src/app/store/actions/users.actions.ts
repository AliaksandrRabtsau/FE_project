import { Action } from '@ngrx/store';
import { User } from './../../model/user';

export enum UsersActionsTypes {
  LOGIN_USER = '[User] LOGIN_USER',
  LOGIN_USER_ERROR= '[User] LOGIN_USER_ERROR',
  LOGIN_USER_SUCCESS = '[User] LOGIN_USER_SUCCESS',
  LOGOUT_USER = '[User] LOGOUT_USER',
  LOGOUT_USER_SUCCESS = '[User] LOGOUT_USER_SUCCESS',
  LOGOUT_USER_ERROR = '[User] LOGOUT_USER_ERROR',
  GET_USERS = '[Users] GET_USERS',
  GET_USERS_SUCCESS = '[Users] GET_USERS_SUCCESS',
  GET_USERS_ERROR = '[Users] GET_USERS_ERROR',
  GET_USER = '[User] GET_USER',
  GET_USER_SUCCESS = '[User] GET_USER_SUCCESS',
  GET_USER_ERROR = '[Users] GET_USER_ERROR',
  FORGOT_USER_PASSWORD = '[User] FORGOT_USER_PASSWORD',
  FORGOT_USER_PASSWORD_SUCCESS = '[User] FORGOT_USER_PASSWORD_SUCCESS',
  FORGOT_USER_PASSWORD_ERROR = '[User] FORGOT_USER_PASSWORD_ERROR',
  CREATE_USER = '[Users] CREATE_USER',
  CREATE_USER_SUCCESS = '[Users] CREATE_USER_SUCCESS',
  CREATE_USER_ERROR = '[Users] CREATE_USER_ERROR',
  UPDATE_CURRENT_USER = '[User] UPDATE_CURRENT_USER',
  UPDATE_CURRENT_USER_SUCCESS = '[User] UPDATE_CURRENT_USER_SUCCESS',
  UPDATE_CURRENT_USER_ERROR = '[User] UPDATE_CURRENT_USER_ERROR',
  UPDATE_USER = '[Users] UPDATE_USER',
  UPDATE_USER_SUCCESS = '[Users] UPDATE_USER_SUCCESS',
  UPDATE_USER_ERROR = '[Users] UPDATE_USER_ERROR',
  DELETE_USER = '[Users] DELETE_USER',
  DELETE_USER_SUCCESS = '[Users] DELETE_USER_SUCCESS',
  DELETE_USER_ERROR = '[Users] DELETE_USER_ERROR'
}

export class LoginUser implements Action {
  readonly type = UsersActionsTypes.LOGIN_USER;
  constructor(public payload: string) {
  }
}

export class LoginUserSuccess implements Action {
  readonly type = UsersActionsTypes.LOGIN_USER_SUCCESS;
  constructor(public payload: User) {
  }
}

export class LoginUserError implements Action {
  readonly type = UsersActionsTypes.LOGIN_USER_ERROR;
  constructor(public payload: string | number) {
  }
}

export class LogoutUser implements Action {
  readonly type = UsersActionsTypes.LOGOUT_USER;
}

export class LogoutUserSuccess implements Action {
  readonly type = UsersActionsTypes.LOGOUT_USER_SUCCESS;
}

export class LogoutUserError implements Action {
  readonly type = UsersActionsTypes.LOGOUT_USER_ERROR;
  constructor(public payload: string) {
  }
}

export class GetUsers implements Action {
  readonly type = UsersActionsTypes.GET_USERS;
}

export class GetUsersSuccess implements Action {
  readonly type = UsersActionsTypes.GET_USERS_SUCCESS;
  constructor(public payload: User[]) { }
}

export class GetUsersError implements Action {
  readonly type = UsersActionsTypes.GET_USERS_ERROR;
  constructor(public payload: Error | string) { }
}

export class GetUser implements Action {
  readonly type = UsersActionsTypes.GET_USER;
}

export class GetUserSuccess implements Action {
  readonly type = UsersActionsTypes.GET_USER_SUCCESS;
  constructor(public payload: User) { }
}

export class GetUserError implements Action {
  readonly type = UsersActionsTypes.GET_USER_ERROR;
  constructor(public payload: Error | string) { }
}

export class ForgotUserPassword implements Action {
  readonly type = UsersActionsTypes.FORGOT_USER_PASSWORD;
  constructor(public payload: string) { }
}

export class ForgotUserPasswordSuccess implements Action {
  readonly type = UsersActionsTypes.FORGOT_USER_PASSWORD_SUCCESS;
  constructor(public payload: User) { }
}

export class ForgotUserPasswordError implements Action {
  readonly type = UsersActionsTypes.FORGOT_USER_PASSWORD_ERROR;
  constructor(public payload: string) {
  }
}

export class UpdateCurrentUser implements Action {
  readonly type = UsersActionsTypes.UPDATE_CURRENT_USER;
  constructor(public payload: User) {
  }
}

export class UpdateCurrentUserSuccess implements Action {
  readonly type = UsersActionsTypes.UPDATE_CURRENT_USER_SUCCESS;
  constructor(public payload: User) {
  }
}

export class UpdateCurrentUserError implements Action {
  readonly type = UsersActionsTypes.UPDATE_CURRENT_USER_ERROR;
  constructor(public payload: string) {
  }
}

export class CreateUser implements Action {
  readonly type = UsersActionsTypes.CREATE_USER;
  constructor(public payload: User) { }
}

export class CreateUserSuccess implements Action {
  readonly type = UsersActionsTypes.CREATE_USER_SUCCESS;
  constructor(public payload: User) { }
}

export class CreateUserError implements Action {
  readonly type = UsersActionsTypes.CREATE_USER_ERROR;
  constructor(public payload: Error | string) { }
}

export class UpdateUser implements Action {
  readonly type = UsersActionsTypes.UPDATE_USER;
  constructor(public payload: User) { }
}

export class UpdateUserSuccess implements Action {
  readonly type = UsersActionsTypes.UPDATE_USER_SUCCESS;
  constructor(public payload: User) { }
}

export class UpdateUserError implements Action {
  readonly type = UsersActionsTypes.UPDATE_USER_ERROR;
  constructor(public payload: Error | string) { }
}

export class DeleteUser implements Action {
  readonly type = UsersActionsTypes.DELETE_USER;
  constructor(public payload: User) { }
}

export class DeleteUserSuccess implements Action {
  readonly type = UsersActionsTypes.DELETE_USER_SUCCESS;
  constructor(public payload: User) { }
}

export class DeleteUserError implements Action {
  readonly type = UsersActionsTypes.DELETE_USER_ERROR;
  constructor(public payload: Error | string) { }
}



export type UsersActions =
  | LoginUser
  | LoginUserSuccess
  | LoginUserError
  | LogoutUser
  | LogoutUserSuccess
  | LogoutUserError
  | GetUsers
  | GetUsersSuccess
  | GetUsersError
  | GetUser
  | GetUserSuccess
  | GetUserError
  | ForgotUserPassword
  | ForgotUserPasswordSuccess
  | ForgotUserPasswordError
  | UpdateCurrentUser
  | UpdateCurrentUserSuccess
  | UpdateCurrentUserError
  | CreateUser
  | CreateUserSuccess
  | CreateUserError
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserError
  | DeleteUser
  | DeleteUserSuccess
  | DeleteUserError;


