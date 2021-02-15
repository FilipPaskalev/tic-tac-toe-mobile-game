import React from "react";
import { useFonts } from "expo-font";
import { StyleSheet, View, Text } from "react-native";

type LetterPressProps = {
  content: string;
  setFontSize?: number;
  containerStyles?: object;
};

function LetterPress({
  content,
  setFontSize,
  containerStyles,
}: LetterPressProps) {
  const [loaded] = useFonts({
    Agentorange: require("../../assets/fonts/Agentorange.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={[styles.text, { fontSize: setFontSize }]}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
  },
  text: {
    fontFamily: "Agentorange",
    fontSize: 14,
    color: "#060e3c",
  },
});

export default LetterPress;
