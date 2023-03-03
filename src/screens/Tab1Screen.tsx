import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('tab 1 screen');
  }, []);

  return (
    <View style={styles.marginGlobal}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="rocket" size={30} color="#900" />;
        <Icon name="attach-outline" size={30} color="#900" />;
        <Icon name="bonfire-outline" size={30} color="#900" />;
        <Icon name="calculator-outline" size={30} color="#900" />;
        <Icon name="images-outline" size={30} color="#900" />;
        <Icon name="leaf-outline" size={30} color="#900" />;
      </Text>
    </View>
  );
};
