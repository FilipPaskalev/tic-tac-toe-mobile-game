import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

/** Hooks */
import { useNavigation } from "@react-navigation/native";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";
import { BUTTON_SIZES } from "../constants/ButtonSizes";

interface SquareButtonProps {
  iconStyles?: object;
  containerStyles?: object;
  graphic?: object;
  navigateTo?: string;
  action?: string;
}

function actions(action?: string) {
  return null;
}

function SquareButton({
  graphic,
  iconStyles,
  containerStyles,
  navigateTo,
  action,
}: SquareButtonProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.container, containerStyles]}
      onPress={() =>
        navigateTo && navigateTo
          ? navigation.navigate(navigateTo)
          : actions(action)
      }
    >
      <Image
        source={graphic && graphic ? graphic : GRAPHICS.ICONS.empty}
        style={[styles.image, iconStyles]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: BUTTON_SIZES.SQUARE_BUTTON.LARGE.width,
    height: BUTTON_SIZES.SQUARE_BUTTON.LARGE.height,
  },
});

export default SquareButton;
