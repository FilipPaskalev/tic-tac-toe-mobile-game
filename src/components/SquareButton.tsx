import React from "react";
import { StyleSheet, View, Image } from "react-native";

interface SquareButtonProps {
  passStyles: object;
  navigateToScreen: string;
}

function SquareButton() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require("../../assets/icons/user.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
  },
  icon: {
    width: 48,
    height: 48,
  },
});

export default SquareButton;
