import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

/**Hooks */
import { useHeaderHeight } from "@react-navigation/stack";

/** Constants */
import { COLORS } from "../constants/Colors";
import LetterPress from "../components/LetterPress";

function ScoreBoardScreen() {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={[styles.screen, { paddingTop: headerHeight }]}>
      <StatusBar style="auto" />
      <LetterPress content={"Score board screen"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.BACKGROUND.APP.primary,
  },
  mainContent: {
    flex: 1,
  },
  arrow: {
    position: "absolute",
    bottom: 16,
    right: 16,
    transform: [{ rotate: "270deg" }],
  },
  questionContainer: {
    width: "100%",
    height: 48,
    margin: 8,
  },
});

export default ScoreBoardScreen;
