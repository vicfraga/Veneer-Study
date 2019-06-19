import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: metrics.tabBarHeight,
    paddingHorizontal: metrics.padding,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: colors.dark,
  },

  icon: {
    color: colors.white,
  },

  active: {
    color: colors.primary,
  },

  main: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainIcon: {
    color: colors.primary,
  },
});

export default styles;
