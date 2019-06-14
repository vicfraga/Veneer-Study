import {StyleSheet} from 'react-native';
import {metrics, fonts, colors} from '../../styles';

const styles = StyleSheet.create({

container:{
    backgroundColor: colors.primary,
    height: metrics.headerHeight,
    paddingTop: metrics.headerPadding,
    paddingHorizontal: metrics.padding,
    borderBottomWidth: 1,
    borderColor: 'pink',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems:'center',
},
icon:{
    color: colors.darker,
},
title:{
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: 'white',
},
});

export default styles;

