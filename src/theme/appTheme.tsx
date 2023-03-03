import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#0021AD',
  white: '#FFFFFF',
  black: '#000000',
};

export const styles = StyleSheet.create({
  marginGlobal: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: '#000000',
  },
  titleBtns: {
    fontSize: 20,
    marginVertical: 10,
    color: '#000000',
  },
  botonGrande: {
    width: 75,
    height: 75,
    backgroundColor: '#0021AD',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  botonGrandeText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  avatarContainer: {alignItems: 'center', marginTop: 10},
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 40,
    alignItems: 'center',
  },
  menuBtn: {
    marginVertical: 10,
    width: '100%',
  },
  menuItemContainer: {
    flexDirection: 'row',
    gap: 10,
    marginLeft: 60,
  },
  menuItem: {
    fontSize: 20,
    color: '#000000',
  },
});
