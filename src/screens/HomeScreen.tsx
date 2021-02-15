import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View } from "react-native";

/**Hooks */
import { useHeaderHeight } from "@react-navigation/stack";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";

/** Components */
import FlatButton from "../components/FlatButton";
import SquareButton from "../components/SquareButton";

function HomeScreen() {
  return (
    <View style={[styles.screen, { paddingTop: useHeaderHeight() }]}>
      <StatusBar style="auto" />
      <View style={styles.logoContainer}></View>
      <View style={styles.buttonsContainer}>
        <FlatButton label={"button 1"} buttonStyles={styles.button} />
        <FlatButton label={"button 2"} buttonStyles={styles.button} />
        <FlatButton label={"button 3"} buttonStyles={styles.button} />
        <FlatButton label={"button 4"} buttonStyles={styles.button} />
      </View>
      <View style={styles.footerContainer}>
        <SquareButton graphic={GRAPHICS.ICONS.rateUs} />
        <SquareButton graphic={GRAPHICS.ICONS.faq} />
        <SquareButton graphic={GRAPHICS.ICONS.puzzle} />
        <SquareButton graphic={GRAPHICS.ICONS.puzzle} />
        <SquareButton graphic={GRAPHICS.ICONS.puzzle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0b2cc",
  },
  logoContainer: {
    borderWidth: 1,
    flex: 1,
  },
  buttonsContainer: {
    // borderWidth: 1,
  },
  button: {
    margin: 8,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
