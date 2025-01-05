import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Dot() {
  return <View style={styles.dot} />;
}

const styles = StyleSheet.create({
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'black',
    margin: 4,
  },
});
