import React from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";

/**Hooks */
import { useNavigation } from "@react-navigation/native";

/**Constants */
import { GRAPHICS } from "../constants/Graphics";
import { BUTTON_SIZES } from "../constants/ButtonSizes";

interface SquareButtonProps {
  iconStyles?: object;
  containerStyles?: object;
  navigateToScreen?: string;
  graphic?: object;
}

function SquareButton({
  navigateToScreen,
  graphic,
  iconStyles,
  containerStyles,
}: SquareButtonProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerStyles && containerStyles ? containerStyles : styles.image,
      ]}
      onPress={() =>
        navigateToScreen && navigateToScreen
          ? navigation.navigate(navigateToScreen)
          : undefined
      }
    >
      <Image
        source={graphic && graphic ? graphic : GRAPHICS.ICONS.EMPTY}
        style={[
          styles.image,
          iconStyles && iconStyles ? iconStyles : styles.image,
        ]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // borderWidth: 1,
  },
  image: {
    width: BUTTON_SIZES.SQUARE_BUTTON.LARGE.width,
    height: BUTTON_SIZES.SQUARE_BUTTON.LARGE.height,
  },
});

export default SquareButton;
