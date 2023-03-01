import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.marginGlobal}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        onPress={() => navigation.navigate('Pagina2Screen')}
        title="Ir página 2"
      />

      <Text>Navegar con argumentos</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#AD0021'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, nombre: 'pedro'})
          }>
          <Text style={styles.botonGrandeText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonGrande}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, nombre: 'maria'})
          }>
          <Text style={styles.botonGrandeText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
