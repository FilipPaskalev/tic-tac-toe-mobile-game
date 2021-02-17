import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Switch, View } from "react-native";

/**Hooks */
import { useHeaderHeight } from "@react-navigation/stack";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";
import { COLORS } from "../constants/Colors";

/** Custom components */
import SquareButton from "../components/SquareButton";
import LetterPress from "../components/LetterPress";
import Footer from "../components/Footer";
import { BUTTON_SIZES } from "../constants/ButtonSizes";
import CustomSwitch from "../components/CustomSwitch";

function SettingsScreen() {
  const headerHeight = useHeaderHeight();
  return (
    <View style={[styles.screen, { paddingTop: headerHeight }]}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.BACKGROUND.APP.primary,
  },
  switchComponent: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
    height: 48,
    width: "100%",
  },
  infoIcon: {
    width: BUTTON_SIZES.SQUARE_BUTTON.SMALL.width,
    height: BUTTON_SIZES.SQUARE_BUTTON.SMALL.height,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    height: BUTTON_SIZES.SQUARE_BUTTON.LARGE.height,
    width: BUTTON_SIZES.SQUARE_BUTTON.LARGE.width,
    // borderWidth: 1,
  },
});

export default SettingsScreen;
