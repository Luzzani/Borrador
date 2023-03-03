import React, {useEffect} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
// import {StackScreenProps} from '@react-navigation/stack';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {styles, colors} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  //boton personalizado
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 15}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" color={colors.primary} size={35} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.marginGlobal}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        onPress={() => navigation.navigate('Pagina2Screen')}
        title="Ir página 2"
      />

      <Text style={styles.titleBtns}>Navegar con argumentos</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#AD0021'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, nombre: 'pedro'})
          }>
          <Icon name="football-outline" size={25} color={colors.white} />
          <Text style={styles.botonGrandeText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonGrande}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, nombre: 'maria'})
          }>
          <Icon name="fitness-outline" size={25} color={colors.white} />
          <Text style={styles.botonGrandeText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
