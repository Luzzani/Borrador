import React from 'react';
import {Platform, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {Tab1Screen} from '../screens/Tab1Screen';
// import {Tab2Screen} from '../screens/Tab2Screen';
// import {Tab3Screen} from '../screens/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {TopTapNavigator} from './TopTapNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bookmark-outline';
              break;
            case 'TopTapNavigator':
              iconName = 'bookmark-outline';
              break;
            case 'StackNavigator':
              iconName = 'bookmark-outline';
              break;
          }
          return <Icon color={color} size={25} name={iconName} />;
        },
      })}
      sceneAnimationEnabled={true}
      activeColor={colors.primary}
      barStyle={{backgroundColor: colors.white}}>
      <BottomTabAndroid.Screen name="Tab1Screen" component={Tab1Screen} />
      <BottomTabAndroid.Screen
        name="TopTapNavigator"
        component={TopTapNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = <Icon name="bookmark-outline" size={25} />;
              break;
            case 'TopTapNavigator':
              iconName = <Icon name="bookmark-outline" size={25} />;
              break;
            case 'StackNavigator':
              iconName = <Icon name="bookmark-outline" size={25} />;
              break;
          }

          return <Text style={{color}}>{iconName}</Text>;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopColor: colors.white,
          elevation: 0,
        },
        tabBarLabelStyle: {fontSize: 20},
      })}
      sceneContainerStyle={{
        backgroundColor: colors.white,
      }}>
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
        }}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="TopTapNavigator"
        options={{
          title: 'Tab 2',
        }}
        component={TopTapNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{
          title: 'Stack',
        }}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
