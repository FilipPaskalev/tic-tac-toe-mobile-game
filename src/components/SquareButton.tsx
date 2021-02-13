import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface SquareButtonProps {
  navigateToScreen?: string;
}

function SquareButton({ navigateToScreen }: SquareButtonProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigateToScreen && navigateToScreen
          ? navigation.navigate(navigateToScreen)
          : undefined
      }
    >
      <Image
        source={require("../../assets/icons/user.png")}
        style={styles.icon}
      ></Image>
    </TouchableOpacity>
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
