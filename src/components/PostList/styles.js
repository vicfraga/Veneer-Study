import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../styles';

const styles = StyleSheet.create({
  containerBG: {
    backgroundColor: colors.primary
  },
  container: {
    padding: metrics.padding,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: metrics.padding,
  },
  containerIcons: {
    padding: metrics.padding,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  icon:{
    textAlign: 'center',
    color: colors.white,
  }
});

export default styles;
