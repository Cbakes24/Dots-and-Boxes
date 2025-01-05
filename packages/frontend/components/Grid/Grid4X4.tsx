import React from "react";
import { View, StyleSheet } from "react-native";

const Grid4X4 = () => {
  // Define how many rows/columns you want
  const rows = 4;
  const cols = 4;

  return (
    <View style={styles.container}>
      {/* Map over the rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {/* Map over the columns */}
          {Array.from({ length: cols }).map((_, colIndex) => (
            <View style={styles.box} key={colIndex} />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flexDirection: "row",
  },
  box: {
    width: "25%",       // 4 columns => each is 25%
    aspectRatio: 1,     // Make each box a square
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 8,
  },
});

export default Grid4X4;


// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const Grid4X4 = () => {
//   return (
//     <View>
//       <View style={{ display: "flex", flexDirection: "row"}}>
//         <View style={styles.four}></View>
//         <View style={styles.four}></View>
//         <View style={styles.four}></View>
//         <View style={styles.four}></View>
//       </View>

//       <View style={{ display: "flex", flexDirection: "row" }}>
//         <View style={styles.four}></View>
//         <View style={styles.four}></View>
//         <View style={styles.four}></View>
//         <View style={styles.four}></View>
//       </View>

//       <View style={{ display: "flex", flexDirection: "row" }}>
//         <View style={styles.four}></View>
//         <View style={styles.four}></View>
//         <View style={styles.four}></View>
//         <View style={styles.four}></View>
//       </View>

//       <View style={{ display: "flex", flexDirection: "row" }}>
//         <View style={styles.four}></View>
//         <View style={styles.four}></View>
//         <View style={styles.four}></View>
//         <View style={styles.four}></View>
//       </View>

//     </View>
//   );
// };

// export default Grid4X4;

// const styles = StyleSheet.create({
//   four: {
//     color: "#808080",
//     width: "25%",
//     height: 100,
//     position: "relative",
//     backgroundColor: "lightblue",
//     borderWidth: 1,
//     borderColor: "#808080",
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

/*4x4 each square takes up 25% of the gridWidth so set the 4X4 style to have 25% 
of its parent container (the grid width)
3x3 each square takes  up 33% of the grid width so set the 4X4 style to have 33% 
of its parent container (the grid width whose width is relative to the device screen)
*/
