import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 31,
    //backgroundColor: 'rgb(29, 161, 242)',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'rgb(29, 161, 242)',

  },

  'button-outline': {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: colors.primary,
  },

  text: {
    color: 'rgb(29, 161, 242)',
    fontWeight: 'bold',
    fontSize: fonts.small,
  },

  'text-outline': {
    color: colors.primary,
  },

  'icon-outline': {
    color: 'rgb(29, 161, 242)',
    fontSize:25,
  },
});

export default styles;
