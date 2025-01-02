import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Pressable,
    Platform,
    Vibration,
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import React from "react";
  import { useState } from "react";
  import { Link, Stack } from "expo-router";
  import { HelloWave } from "@/components/HelloWave";
  // import { createStackNavigator } from '@react-navigation/stack';
  
  export type RootStackParamList = {
    tabs: undefined; // Define your 'tabs' screen with no params
    otherScreen: { param: string }; // Example of another screen with params
  };
  
  const Separator = () => {
    return <View style={Platform.OS === "ios" ? styles.separator : null} />;
  };
  
  const index = () => {
    const [isPressed, setIsPressed] = useState(false);
    const [isLongPressed, setIsLongPressed] = useState(false);
    const [isLongVibe, setIsLongVibe] = useState(false);
    const [isVibed, setIsVibed] = useState(false);
    const navigation = useNavigation();
  
    const ONE_SECOND_IN_MS = 1000;
  
    //this is for vibration https://reactnative.dev/docs/vibration
    const PATTERN = [
      1 * ONE_SECOND_IN_MS,
      2 * ONE_SECOND_IN_MS,
      3 * ONE_SECOND_IN_MS,
    ];
  
    const PATTERN_DESC =
      Platform.OS === "ios"
        ? "wait 1s, vibrate 2s, wait 3s"
        : "wait 1s, vibrate, wait 2s, vibrate, wait 3s";
  
    return (
      <View style={styles.container}>
        {/*The text changes depending on what the PRESSAABLE button is doing*/}
        <Text style={styles.button}>
          {isLongPressed
            ? "Too Much!! VIBEYYY (Long Press)"
            : isPressed
              ? "Ahh thats the spot! (Pressed)"
              : "Make me feel good (Not presssed)"}
        </Text>
        <HelloWave />
   
        {/*This is the PRESSABLE press me button*/}
        <Pressable
          onPress={() => console.log("Button Pressed")}
          onPressIn={() => {
            console.log("Button Pressed In");
            setIsPressed(true);
            // Vibration.vibrate([100]);
          }}
          onPressOut={() => {
            console.log("Button Pressed Out");
            setIsPressed(false);
            setIsLongPressed(false);
          }}
          delayLongPress={700}
          onLongPress={() => {
            setIsLongPressed(true);
            console.log("Button Long Pressed");
            // Vibration.vibrate();
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
            },
            styles.homeButton,
          ]}
        >
          {/*This is the PRESS ME BUTTON*/}
          {({ pressed }) => (
            <Text style={styles.homeButtonText}>
              {pressed ? "Pressed!" : "Press Me Bitch"}
            </Text>
          )}
        </Pressable>
  
        <Separator />
  
       <Text style={styles.button}>
          {isLongVibe
            ? "ZZZZZZZ!!!!"
            : isVibed
            ? "buzzz"
            : "Vibe Test"}
        </Text>
            
    {/*This is the VIBRATION button*/}
        <Pressable
          onPress={() => console.log("Button Pressed")}
          onPressIn={() => {
            console.log("Vibration Pressed In");
            setIsVibed(true);
            Vibration.vibrate([100]);
          }}
          onPressOut={() => {
            console.log("Button Pressed Out");
            setIsVibed(false);
            setIsLongVibe(false);
            Vibration.cancel();
          }}
          delayLongPress={700}
          onLongPress={() => {
            setIsLongVibe(true);
            console.log("Button Long Pressed");
            Vibration.vibrate();
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
            },
            styles.homeButton,
          ]}
        >
          {/*This is the PRESS ME BUTTON*/}
          {({ pressed }) => (
            <Text style={styles.homeButtonText}>
              {pressed ? "Buzzzzzzz!" : "Lets Vibe"}
            </Text>
          )}
        </Pressable>
  
        <Separator />
  {/* 
                  <Stack
                  screenOptions={{
                    headerStyle: {
                      backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}>
                  <Stack.Screen name="(tabs)/index" />
                  <Stack.Screen name="(tabs)/explore" />
                  <Stack.Screen name="(tabs)/profile" />
                </Stack> */}
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
            },
            styles.homeButton,
          ]}
        >
          {({ pressed }) => (
            <Text style={styles.homeButtonText}>
              {pressed ? (
                "Clicked"
              ) : (
                <Text>
                  <Link href="/(tabs)">Tabs</Link>
                </Text>
              )}
            </Text>
          )}
        </Pressable>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    homeButton: {
      padding: 10,
      borderRadius: 10,
      margin: 10,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "#f0f0f0",
      // backgroundColor: "red",
    },
    homeButtonText: {
      fontSize: 18,
      color: "#333",
      textAlign: "center",
    },
    button: {
      padding: 10,
      borderRadius: 10,
      margin: 10,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "#f0f0f0",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
    },
    container: {
      display: "flex",
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "stretch",
      width: "100%",
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: "#737373",
      borderBottomWidth: 1,
      width: "70%",
      alignSelf: "center",
    },
  });
  
  export default index;
  