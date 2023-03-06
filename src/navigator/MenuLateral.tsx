import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  useWindowDimensions,
  Image,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

// import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';

import {styles} from '../theme/appTheme';
import {Tabs} from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        drawerStyle: {
          // backgroundColor: colors.primary, //Set Drawer background
          width: 250, //Set Drawer width
        },
        header: () => {
          return <></>;
        },
        // headerStyle: {
        //   backgroundColor: colors.primary, //Set Header color
        // },
        // headerTintColor: '#fff', //Set Header text color
        // headerTitleStyle: {
        //   fontWeight: 'bold', //Set Header text style
        // },
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* avatar */}
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png',
          }}
        />
      </View>
      {/* menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => navigation.navigate('Tabs')}>
          <View style={styles.menuItemContainer}>
            <Icon name="navigate-circle-outline" size={30} color={'#000000'} />
            <Text style={styles.menuItem}>Navegación</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <View style={styles.menuItemContainer}>
            <Icon name="settings-outline" size={30} color={'#000000'} />
            <Text style={styles.menuItem}>Ajustes</Text>
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
