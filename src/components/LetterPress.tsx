import React from "react";
import { useFonts } from "expo-font";
import { StyleSheet, View, Text } from "react-native";

type LetterPressProps = {
  content: string;
  textStyles?: object;
  containerStyles?: object;
};

function LetterPress({
  content,
  textStyles,
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
      <Text style={[styles.text, textStyles]}>{content}</Text>
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
