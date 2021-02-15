import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, SafeAreaView, View, Text } from "react-native";

/**Hooks */
import { useHeaderHeight } from "@react-navigation/stack";

/** Custom components */
import SquareButton from "../components/SquareButton";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";
import { COLORS } from "../constants/Colors";
const FAQ_MOCK_DATA = [
  {
    question: "Question 1",
    answer: "Answer 1",
  },
  {
    question: "Question 2",
    answer: "Answer 2",
  },
  {
    question: "Question 3",
    answer: "Answer 3",
  },
];

function FaqScreen() {
  return (
    <SafeAreaView style={[styles.screen, { paddingTop: useHeaderHeight() }]}>
      <StatusBar style="auto" />
      <SquareButton graphic={GRAPHICS.ICONS.arrow} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.BACKGROUND.APP.primary,
  },
});

export default FaqScreen;
