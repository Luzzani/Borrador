import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbubbles-outline';
              break;
            case 'ContactsScreen':
              iconName = 'person-outline';
              break;
            case 'AlbumsScreen':
              iconName = 'image-outline';
              break;
          }

          return <Icon color={color} name={iconName} size={25} />;
        },
        tabBarStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          borderTopColor: colors.white,
        },
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
      })}
      sceneContainerStyle={{backgroundColor: colors.white}}>
      <Tab.Screen
        name="ChatScreen"
        options={{title: 'Chat'}}
        component={ChatScreen}
      />
      <Tab.Screen
        name="ContactsScreen"
        options={{title: 'Contactos'}}
        component={ContactsScreen}
      />
      <Tab.Screen
        name="AlbumsScreen"
        options={{title: 'Album'}}
        component={AlbumsScreen}
      />
    </Tab.Navigator>
  );
};
