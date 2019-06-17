import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const Publicacoes = ({ publicacao : { image }, modo }) => (
  <View style={(modo) ? styles.modoContainer : styles.container}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  </View>
);

export default Publicacoes;
