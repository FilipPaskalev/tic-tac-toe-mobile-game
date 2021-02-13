import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ width: "100%", borderWidth: 1 }}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#de9191",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    paddingHorizontal: 16,
  },
});

export default HomeScreen;
