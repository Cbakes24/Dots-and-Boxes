import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

interface HorizontalLineProps {
  isActive: boolean;
  onPress: () => void;
}

export default function HorizontalLine({ isActive, onPress }: HorizontalLineProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.hLine, isActive && styles.hLineActive]}
    />
  );
}

const styles = StyleSheet.create({
  hLine: {
    width: 40,
    height: 2,
    backgroundColor: '#ccc',
  },
  hLineActive: {
    backgroundColor: 'blue',  // or any color you prefer
    height: 4,                // make it thicker
  },
});
