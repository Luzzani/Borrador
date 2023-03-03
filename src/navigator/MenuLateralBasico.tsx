import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {useWindowDimensions, Dimensions} from 'react-native';
const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  const {width} = useWindowDimensions();
  console.log('ancho: ', width);
  console.log('anchoD: ', Dimensions.get('window').width);

  return (
    <Drawer.Navigator
      defaultStatus={Dimensions.get('window').width >= 768 ? 'open' : 'closed'}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
