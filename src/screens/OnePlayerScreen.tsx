import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View } from "react-native";

/**Hooks */
import { useHeaderHeight } from "@react-navigation/stack";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";
import { COLORS } from "../constants/Colors";
import { SCREEN_INFO } from "../constants/ScreensInfo";

/** Custom components */
import FlatButton from "../components/FlatButton";
import SquareButton from "../components/SquareButton";

function OnePlayerScreen() {
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
});

export default OnePlayerScreen;
