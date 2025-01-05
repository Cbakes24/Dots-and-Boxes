import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Dot from './Dot';
import HorizontalLine from './HorizontalLine';
import VerticalLine from './VerticalLine';

export default function DotsAndBoxesAi() {
  const numRows = 3;  // change to 4 for a 4×4 dot grid, etc.
  const numCols = 3;

  // Set up initial "inactive" lines
  const initialLines: Record<string, boolean> = {};

  // Horizontal line IDs, e.g.: "h-0-0", "h-0-1", etc.
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols - 1; c++) {
      initialLines[`h-${r}-${c}`] = false;
    }
  }

  // Vertical line IDs, e.g.: "v-0-0", "v-0-1", etc.
  for (let r = 0; r < numRows - 1; r++) {
    for (let c = 0; c < numCols; c++) {
      initialLines[`v-${r}-${c}`] = false;
    }
  }

  const [lines, setLines] = useState(initialLines);

  // Toggle a line on/off in state
  const handleLinePress = (id: string) => {
    setLines((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <View style={styles.container}>
      {/** Render each row of Dots **/}
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <View style={styles.dotRow} key={`row-${rowIndex}`}>
          {/** Each dot in this row **/}
          {Array.from({ length: numCols }).map((_, colIndex) => (
            <React.Fragment key={`dot-${rowIndex}-${colIndex}`}>
              <Dot />
              {/** If there is a next dot horizontally, render a horizontal line **/}
              {colIndex < numCols - 1 && (
                <HorizontalLine
                  isActive={lines[`h-${rowIndex}-${colIndex}`]}
                  onPress={() => handleLinePress(`h-${rowIndex}-${colIndex}`)}
                />
              )}
            </React.Fragment>
          ))}
        </View>
      ))}

      {/** Render rows of vertical lines between each row of dots **/}
      {Array.from({ length: numRows - 1 }).map((_, rowIndex) => (
        <View style={styles.lineRow} key={`vrow-${rowIndex}`}>
          {Array.from({ length: numCols }).map((_, colIndex) => (
            <React.Fragment key={`vline-${rowIndex}-${colIndex}`}>
              <VerticalLine
                isActive={lines[`v-${rowIndex}-${colIndex}`]}
                onPress={() => handleLinePress(`v-${rowIndex}-${colIndex}`)}
              />
              {/** Optional spacer for horizontal spacing between vertical lines **/}
              {colIndex < numCols - 1 && <View style={styles.spacer} />}
            </React.Fragment>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center', // center horizontally
  },
  dotRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer: {
    width: 40,
  },
});
