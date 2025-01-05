import React from 'react';
import { SafeAreaView } from 'react-native';
import DotsAndBoxesAi from '../../components/DotsAndBoxesAi/DotsAndBoxesAi'; // if using index.ts
// or import DotsAndBoxes from '../components/DotsAndBoxes/DotsAndBoxes';

export default function GameScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DotsAndBoxesAi />
    </SafeAreaView>
  );
}
