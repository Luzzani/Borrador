import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {MenuLateralBasico} from './src/navigator/MenuLateralBasico';
// import {StackNavigator} from './src/navigator/StackNavigator';
import {MenuLateral} from './src/navigator/MenuLateral';
import {AuthProvider} from './src/context/AuthContext';
// import {Tabs} from './src/navigator/Tabs';

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <Tabs /> */}
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
        {/* <StackNavigator /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: {children: JSX.Element}) => {
  return <AuthProvider>{children}</AuthProvider>;
};
