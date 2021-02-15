import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

/** Hooks */
import { useNavigation } from "@react-navigation/native";

/** Custom components */
import LetterPress from "./LetterPress";

/** Constants */
import { BUTTON_SIZES } from "../constants/ButtonSizes";

interface FlatButtonProps {
  label?: string;
  containerStyles?: object;
  buttonStyles?: object;
  goToScreen?: string;
}

function FlatButton({
  label,
  containerStyles,
  buttonStyles,
  goToScreen,
}: FlatButtonProps) {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, containerStyles]}>
      <TouchableOpacity
        style={[styles.button, buttonStyles]}
        onPress={() => goToScreen && navigation.navigate(goToScreen)}
      >
        <LetterPress containerStyles={styles.text} content={label && label} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#2a64c0",
  },
  button: {
    width: "100%",
    backgroundColor: "#2a64c0",
    height: BUTTON_SIZES.FLAT_BUTTON.LARGE.height,
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    justifyContent: "center",
    alignSelf: "center",
    padding: 8,
  },
});

export default FlatButton;
