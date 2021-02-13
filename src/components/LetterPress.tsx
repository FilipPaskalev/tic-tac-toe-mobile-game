import React from "react";
import { useFonts } from "expo-font";
import { View, Text } from "react-native";

function LetterPress() {
  const [loaded] = useFonts({
    TitanOneRegular: require("../../assets/fonts/TitanOne-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <Text style={{ fontFamily: "TitanOneRegular", fontSize: 30 }}>
        TitanOneRegular
      </Text>
    </View>
  );
}

export default LetterPress;
