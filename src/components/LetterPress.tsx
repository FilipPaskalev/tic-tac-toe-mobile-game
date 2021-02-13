import React from "react";
import { useFonts } from "expo-font";
import { StyleSheet, View, Text } from "react-native";

type LetterPressProps = {
  context: string;
  setFontSize?: number;
};

function LetterPress({ context, setFontSize }: LetterPressProps) {
  const [loaded] = useFonts({
    Agentorange: require("../../assets/fonts/Agentorange.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: setFontSize }]}>{context}</Text>
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
