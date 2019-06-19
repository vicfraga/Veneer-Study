import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.padding,
    backgroundColor: colors.primary,
    borderBottomWidth: 1,
    borderColor: colors.dark,
  },
  containerIcon:{
  backgroundColor: colors.primary,
  height: metrics.tabBarHeight,
  paddingHorizontal: metrics.padding,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderTopWidth: 1,
  borderColor: colors.dark,
  },
  profileContainer: {
    flexDirection: 'row',

  },

  numbers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  numbersItem: {
    justifyContent:'center',
    alignItems:'center'
  },

  avatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
    marginRight: metrics.padding,
  },

  profileInfo: {
    flex: 1,
    paddingLeft:20,
    paddingBottom:10
  },

  name: {
    fontWeight: 'bold',
    fontSize: fonts.big,
    color: colors.darker,
    marginTop: 5,
  },
  info: {
    flexDirection: 'row',
    padding: metrics.padding,
    fontWeight: 'bold',
    fontSize: fonts.big,
    color: colors.white,
    marginTop: 5,
  },

  bio: {
    fontSize: fonts.regular,
    color: colors.white,
    marginTop: 5,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems:'center',
    justifyContent:'center',
    // paddingLeft:90
  },

  firstButton: {
    marginRight: 10,
  },
  icon:{
    flexDirection: 'row',
    marginTop: 10,
    
  },
});

export default styles;
