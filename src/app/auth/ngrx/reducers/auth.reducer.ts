import {IState} from '../../../interfaces/IState';
import {initialState} from '../../../ngrx/initialState';
import {AuthActions, AuthActionTypes} from '../actions/auth';

export function authReducer(state: IState = initialState, action: AuthActions) {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return {
        user: {
          ...state.user, token: action.payload.token
        },
        courses: [...state.courses]
      };
    case AuthActionTypes.Logout:
      return {
        user: {
          ...state.user, token: null
        },
        courses: [...state.courses]
      };
    default:
      return state;
  }
}
