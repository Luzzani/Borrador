import {AuthState, AuthInitialState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'logout'}
  | {type: 'changeUserName'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {...state, isLoggedIn: true, userName: 'no-user-name'};

    case 'changeFavIcon':
      return {...state, favoriteIcon: action.payload};

    case 'changeUserName':
      return {...state, userName: action.payload};

    case 'logout':
      return AuthInitialState;
    default:
      return state;
  }
};
