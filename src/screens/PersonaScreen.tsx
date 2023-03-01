import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.nombre,
    });
  }, []);
  return (
    <View style={styles.marginGlobal}>
      <Text style={styles.title}>{route.params.nombre}</Text>
    </View>
  );
};
