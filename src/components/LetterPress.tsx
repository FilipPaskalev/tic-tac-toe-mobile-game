import React from "react";
import { useFonts } from "expo-font";
import { StyleSheet, Text } from "react-native";

type LetterPressProps = {
  context: string;
};

function LetterPress({ context }: LetterPressProps) {
  const [loaded] = useFonts({
    TitanOneRegular: require("../../assets/fonts/TitanOne-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Text style={styles.text}>{context}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "TitanOneRegular",
    fontSize: 30,
  },
});

export default LetterPress;
