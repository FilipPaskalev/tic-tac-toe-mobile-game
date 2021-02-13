import React from "react";
import { StyleSheet, View } from "react-native";
import LetterPress from "./LetterPress";

type TitleProps = {
  title: string;
};

function CustomHeader({ title }: TitleProps) {
  return (
    <View style={styles.container}>
      <LetterPress context={title} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
});

export default CustomHeader;
