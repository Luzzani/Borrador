import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

// Definir como luce mi inicial state o estado de la app
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const AuthInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};

//Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeFavIcon: (iconName: string) => void;
  changeUserName: (userName: string) => void;
}
// crear contexto
export const AuthContext = createContext({} as AuthContextProps);

// componente que es proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, AuthInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const changeUserName = (userName: string) => {
    dispatch({type: 'changeUserName', payload: userName});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavIcon,
        logout,
        changeUserName,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
