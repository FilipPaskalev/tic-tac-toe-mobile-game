import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";

function HomeScreen() {
  return (
    <View style={[styles.container, { paddingTop: useHeaderHeight() }]}>
      <StatusBar style="auto" />
      <Image source={GRAPHICS.IMAGES.LOGO} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#de9191",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  logo: {
    flex: 1,
    alignSelf: "stretch",
  },
});

export default HomeScreen;
