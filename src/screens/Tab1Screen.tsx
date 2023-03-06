import React, {useEffect} from 'react';

import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableIcon} from '../components/TouchableIcon';

const icons = [
  'rocket',
  'attach-outline',
  'bonfire-outline',
  'calculator-outline',
  'images-outline',
  'leaf-outline',
];

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('tab 1 screen');
  }, []);

  return (
    <View style={styles.marginGlobal}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        {icons.map((icon, i) => {
          return <TouchableIcon key={i} name={icon} />;
        })}
      </Text>
    </View>
  );
};
