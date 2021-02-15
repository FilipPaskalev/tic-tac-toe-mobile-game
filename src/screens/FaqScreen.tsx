import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, SafeAreaView, View, Text } from "react-native";

/**Hooks */
import { useHeaderHeight } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

/** Custom components */
import SquareButton from "../components/SquareButton";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";
import { COLORS } from "../constants/Colors";
import LetterPress from "../components/LetterPress";
import FlatButton from "../components/FlatButton";
import { SCREEN_INFO } from "../constants/ScreensInfo";

const DATA: any = [];

const getItem = (data: any, index: any) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = (data: any) => 50;

const Item = (title: any) => (
  <View>
    <Text>{title}</Text>
  </View>
);

function FaqScreen() {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={[styles.screen, { paddingTop: headerHeight }]}>
      <StatusBar style="auto" />
      <ScrollView style={styles.mainContent}>
        <View style={styles.questionContainer}>
          <LetterPress content={"Question 1"} />
        </View>
        <View style={styles.questionContainer}>
          <LetterPress content={"Question 1"} />
        </View>
        <View style={styles.questionContainer}>
          <LetterPress content={"Question 1"} />
        </View>
        <View style={styles.questionContainer}>
          <LetterPress content={"Question 1"} />
        </View>
        <View style={styles.questionContainer}>
          <LetterPress content={"Question 1"} />
        </View>
        <View style={styles.questionContainer}>
          <LetterPress content={"Question 1"} />
        </View>
        <View style={styles.questionContainer}>
          <LetterPress content={"Question 1"} />
        </View>
        <View style={styles.questionContainer}>
          <LetterPress content={"Question 1"} />
        </View>
        <View style={styles.questionContainer}>
          <LetterPress content={"Question 1"} />
        </View>
        <View style={styles.questionContainer}>
          <LetterPress content={"Question 1"} />
        </View>
        <View style={styles.questionContainer}>
          <LetterPress content={"Question 1"} />
        </View>
        <View style={styles.questionContainer}>
          <LetterPress content={"Question 1"} />
        </View>
      </ScrollView>
      <SquareButton
        containerStyles={styles.arrow}
        graphic={GRAPHICS.ICONS.arrow}
      />
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

export default FaqScreen;
