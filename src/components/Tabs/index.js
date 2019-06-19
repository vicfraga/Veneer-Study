import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const Tabs = () => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Icon name="ios-home" size={24} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon name="ios-search" size={24} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.main}>
      <Icon name="ios-add" size={24} style={styles.mainIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon name="ios-heart" size={24} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon name="ios-person" size={24} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

export default Tabs;
