import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {tap, map, exhaustMap, catchError} from 'rxjs/operators';

import {AuthService} from '../../../services/auth.service';
import {Login, LoginSuccess, LoginFailure, AuthActionTypes} from '../actions/auth';

@Injectable()
export class AuthEffects {
  constructor(private action$: Actions,
              private authService: AuthService,
              private router: Router
  ) {}

  @Effect()
  login$ = this.action$.pipe(
    ofType(AuthActionTypes.Login),
    map((action: Login) => action.payload),
    exhaustMap((payload: {email: string, password: string}) =>
      this.authService
        .logIn2(payload.email, payload.password)
        .pipe(
          map((resp: {token: string}) => new LoginSuccess({token: resp.token})),
          catchError(er => of(new LoginFailure(er)))
        )
    )
  );

  @Effect({ dispatch: false})
  loginSuccess$ = this.action$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => this.router.navigateByUrl(''))
  );

  @Effect({dispatch: false})
  loginFailure$ = this.action$.pipe(
    ofType(AuthActionTypes.LoginFailure),
    map((action: LoginFailure) => action.payload),
    tap((payload: any) => alert(payload.error))
  );

  @Effect({dispatch: false})
  logout$ = this.action$.pipe(
    ofType(AuthActionTypes.Logout),
    tap(() => this.router.navigateByUrl('/login'))
  );
}
