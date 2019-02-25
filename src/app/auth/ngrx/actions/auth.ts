import {Action} from '@ngrx/store';

export enum AuthActionTypes {
  Login = 'Auth.Login',
  Logout = 'Auth.Logout',
  LoginSuccess = 'Auth.LoginSuccess',
  LoginFailure = 'Auth.LoginFailure',
  LoginRedirect = 'Auth.LoginRedirect'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: {email: string, password: string}) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: {token: string}) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActions =
  | LoginSuccess
  | Login
  | LoginFailure
  | Logout;
