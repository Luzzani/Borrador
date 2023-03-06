import React, {useEffect, useContext} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';
import {AuthContext} from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  const {changeUserName} = useContext(AuthContext);
  useEffect(() => {
    navigation.setOptions({
      title: route.params.nombre,
    });
  }, []);

  useEffect(() => {
    changeUserName(route.params.nombre);
  }, []);

  return (
    <View style={styles.marginGlobal}>
      <Text style={styles.title}>{route.params.nombre}</Text>
    </View>
  );
};
