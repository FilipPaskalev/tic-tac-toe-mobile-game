import React from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface SquareButtonProps {
  navigateToScreen?: string;
  graphic: object;
}

function SquareButton({ navigateToScreen, graphic }: SquareButtonProps) {
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
      <Image source={graphic} style={styles.icon} />
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
