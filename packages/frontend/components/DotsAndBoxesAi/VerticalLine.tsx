import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

interface VerticalLineProps {
  isActive: boolean;
  onPress: () => void;
}

export default function VerticalLine({ isActive, onPress }: VerticalLineProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.vLine, isActive && styles.vLineActive]}
    />
  );
}

const styles = StyleSheet.create({
  vLine: {
    width: 2,
    height: 40,
    backgroundColor: '#ccc',
  },
  vLineActive: {
    backgroundColor: 'blue',
    width: 4,  // thicker line
  },
});
