import React from "react";
import { StyleSheet, View } from "react-native";
import LetterPress from "./LetterPress";
import SquareButton from "./SquareButton";

type TitleProps = {
  title: string;
};

function CustomHeader({ title }: TitleProps) {
  return (
    <View style={styles.container}>
      <SquareButton />
      <LetterPress context={title} />
      <SquareButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
  },
});

export default CustomHeader;
