// import React, { useState } from "react";
// import { View, Pressable, StyleSheet } from "react-native";

// /**
//  * A single dot (like a small circle).
//  */
// const Dot = () => {
//   return <View style={styles.dot} />;
// };

// /**
//  * A horizontal line you can press.
//  * If active, we apply a thicker border/color.
//  */
// const HorizontalLine = ({ isActive, onPress }) => {
//   return (
//     <Pressable
//       onPress={onPress}
//       style={[
//         styles.hLine,
//         isActive && styles.hLineActive // apply active styles if isActive
//       ]}
//     />
//   );
// };

// /**
//  * A vertical line you can press.
//  * If active, we apply a thicker border/color.
//  */
// const VerticalLine = ({ isActive, onPress }) => {
//   return (
//     <Pressable
//       onPress={onPress}
//       style={[
//         styles.vLine,
//         isActive && styles.vLineActive // apply active styles if isActive
//       ]}
//     />
//   );
// };

// const DotsAndBoxes = () => {
//   // Suppose we want a 3×3 “dot grid”, which means
//   // 2 lines horizontally in each row, 2 lines vertically in each column.
//   const numRows = 3;
//   const numCols = 3;

//   // We'll store lines in a dictionary, keyed by an ID.
//   // For example, "h-r-c" for horizontal line at row r, col c
//   // and "v-r-c" for vertical line at row r, col c.
//   // We start them all as false (inactive).
//   // For a 3×3 dot grid:
//   //   - Horizontal lines exist between each pair of dots in a row => 2 lines per row => total 3 rows * 2 = 6 horizontal lines
//   //   - Vertical lines exist between each pair of dots in a column => 2 lines per column => total 3 columns * 2 = 6 vertical lines
//   const initialLines = {};
//   for (let r = 0; r < numRows; r++) {
//     for (let c = 0; c < numCols - 1; c++) {
//       initialLines[`h-${r}-${c}`] = false;
//     }
//   }
//   for (let r = 0; r < numRows - 1; r++) {
//     for (let c = 0; c < numCols; c++) {
//       initialLines[`v-${r}-${c}`] = false;
//     }
//   }

//   const [lines, setLines] = useState(initialLines);

//   // Toggle a line in state when pressed
//   const handleLinePress = (id) => {
//     setLines((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   return (
//     <View style={styles.container}>
//       {/* For each row of dots */}
//       {Array.from({ length: numRows }).map((_, rowIndex) => (
//         <View style={styles.dotRow} key={`row-${rowIndex}`}>
//           {/* For each dot in this row */}
//           {Array.from({ length: numCols }).map((_, colIndex) => (
//             <React.Fragment key={`dot-${rowIndex}-${colIndex}`}>
//               {/* A Dot */}
//               <Dot />

//               {/* If there is a horizontal line to the right (colIndex < numCols - 1), render it */}
//               {colIndex < numCols - 1 && (
//                 <HorizontalLine
//                   isActive={lines[`h-${rowIndex}-${colIndex}`]}
//                   onPress={() => handleLinePress(`h-${rowIndex}-${colIndex}`)}
//                 />
//               )}
//             </React.Fragment>
//           ))}
//         </View>
//       ))}

//       {/* Now we layer vertical lines between rows of dots.
//           We place them in a row of their own to visually
//           match the spacing. */}
//       {Array.from({ length: numRows - 1 }).map((_, rowIndex) => (
//         <View style={styles.lineRow} key={`vrow-${rowIndex}`}>
//           {Array.from({ length: numCols }).map((_, colIndex) => (
//             <React.Fragment key={`vline-${rowIndex}-${colIndex}`}>
//               {/* A vertical line that sits below each dot in the row above */}
//               <VerticalLine
//                 isActive={lines[`v-${rowIndex}-${colIndex}`]}
//                 onPress={() => handleLinePress(`v-${rowIndex}-${colIndex}`)}
//               />

//               {/* Spacer if there's a horizontal gap. This is optional,
//                   you can also style it differently. */}
//               {colIndex < numCols - 1 && <View style={styles.spacer} />}
//             </React.Fragment>
//           ))}
//         </View>
//       ))}
//     </View>
//   );
// };

// export default DotsAndBoxes;

// const styles = StyleSheet.create({
//   container: {
//     // Align items so the dots line up horizontally
//     alignItems: "center",
//     marginTop: 50,
//   },
//   dotRow: {
//     // Dots in a row
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   lineRow: {
//     // Vertical lines in a row
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   dot: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     backgroundColor: "black",
//     margin: 4,
//   },
//   hLine: {
//     width: 40,
//     height: 2,
//     backgroundColor: "#ccc",
//   },
//   hLineActive: {
//     backgroundColor: "blue", // or any color you prefer
//     height: 4,               // thicker line
//   },
//   vLine: {
//     width: 2,
//     height: 40,
//     backgroundColor: "#ccc",
//   },
//   vLineActive: {
//     backgroundColor: "blue",
//     width: 4,                // thicker line
//   },
//   spacer: {
//     width: 40, // matches the hLine width above, or adjust as needed
//   },
// });


import React from "react";
import { View, StyleSheet } from "react-native";

const Grid3X3 = () => {
  // Define how many rows/columns you want
  const rows = 3;
  const cols = 3;

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
    width: "33.33%",       // 3 columns => each is 33%
    aspectRatio: 1,     // Make each box a square
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 8,
  },
});

export default Grid3X3;


// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const Grid3X3 = () => {
//   return (
//     <View style={styles.gridContainer}>
//     <View style={{display: "flex", flexDirection: "row"}}>
//       <View style={styles.three}></View>
//       <View style={styles.three}></View>
//       <View style={styles.three}></View>
//     </View>
//         <View style={{display: "flex", flexDirection: "row"}}>
//         <View style={styles.three}></View>
//         <View style={styles.three}></View>
//         <View style={styles.three}></View>
//       </View>
//           <View style={{display: "flex", flexDirection: "row" }}>
//           <View style={styles.three}></View>
//           <View style={styles.three}></View>
//           <View style={styles.three}></View>
//         </View>
//     </View>
//   );
// };

// export default Grid3X3;

// const styles = StyleSheet.create({
//   three: {
//     color: "#808080",
//     width: 150,
//     height: 150,
//     position: "relative",
//     backgroundColor: "lightblue",
//     borderWidth: 1,
//     borderColor: "#808080",
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 10,
//   },
//   gridContainer: {
//     color: "#808080",
//     width: "100%",
//     height: 600,
//     position: "relative",
//     backgroundColor: "lightblue",
//     borderWidth: 1,
//     borderColor: "#808080",
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     // padding: 10,
//     overflow: "scroll",
//   },
// });
