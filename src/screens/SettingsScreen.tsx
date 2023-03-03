import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';

export const SettingsScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{...styles.marginGlobal, marginTop: top}}>
      <Text style={styles.title}>SettingsScreen</Text>
    </View>
  );
};
