import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

export const AlbumsScreen = () => {
  const {logout, signIn, authState} = useContext(AuthContext);

  return (
    <View style={styles.marginGlobal}>
      <Text style={styles.title}>AlbumsScreen</Text>
      {authState.isLoggedIn ? (
        <Button onPress={logout} title={'LogOut'} />
      ) : (
        <Button onPress={signIn} title={'LogIn'} />
      )}
    </View>
  );
};
