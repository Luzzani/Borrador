// import {useNavigation} from '@react-navigation/core';

import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Pagina2Screen = ({navigation}: Props) => {
  // const navigator = useNavigation(); Navegar usando hook de react

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerBackTitle: '', //para modificar el texto en el boton para volver atras en iOS
    });
  }, []);

  return (
    <View style={styles.marginGlobal}>
      <Text style={styles.title}>Pagina2Screen</Text>

      {/*  Navegar usando hook de react
      <Button
        title="Ir página 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      /> */}
      <Button
        title="Ir página 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};
