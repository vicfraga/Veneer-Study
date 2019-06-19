import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, metrics } from '../../../styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    //borderWidth: 1,
    //borderColor: 'pink',
    width: (width - 10) / 3,
    alignSelf: 'flex-start',
  },

  modoContainer: {
    backgroundColor: colors.primary,
    borderRadius: 3,
    marginBottom: metrics.padding,
    shadowColor: colors.light,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    alignSelf: 'flex-start',
    width: (width)
  },

  checkIcon: {
    position: 'absolute',
    right: metrics.padding,
    top: metrics.padding,
    color: colors.primary,
    zIndex: 1,
  },

  imageContainer: {
   //padding: metrics.padding,
  },

  image: {
    width: '100%',
    height: 150,
    //resizeMode: 'contain',
  },

  modoImage: {
    width: width,
    height: 400,
    //height:'100%',
    resizeMode: 'cover',
  },

  infoContainer: {
    padding: metrics.padding,
    borderTopWidth: 1,
    borderColor: colors.lighter,
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.darker,
  },

  description: {
    textAlign: 'center',
    color: colors.dark,
    fontSize: fonts.smaller,
  },

  price: {
    textAlign: 'center',
    color: colors.light,
    fontSize: fonts.regular,
    marginTop: 5,
  },
  

});

export default styles;
