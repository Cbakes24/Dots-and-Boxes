
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import Grid3X3 from "@/components/Grid/Grid3X3";
import Grid4X4 from "@/components/Grid/Grid4X4";

const grid = () => {
  const [gridView, setGridView] = useState(3);

  return (
    <View>
      <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
        <Pressable style={styles.homeButton} onPress={() => setGridView(3)}>
          <Text>3x3</Text>
        </Pressable>
        <Pressable style={styles.homeButton} onPress={() => setGridView(4)}>
          <Text>4x4</Text>
        </Pressable>
      </View>

      {gridView === 3 ? <Grid3X3 /> : <Grid4X4 />}
    </View>
  );
};

export default grid;

const styles = StyleSheet.create({

  homeButton: {
    padding: 10,
    borderRadius: 10,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0f0f0",
    // backgroundColor: "red",
  },
});
