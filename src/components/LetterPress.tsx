import React, { FunctionComponent } from "react";
import { StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";

/** Constants */
import { FONTS } from "../constants/typography/Fonts";

/** Enumerations */
import { FONT_NAMES } from "../constants/typography/FontNames";

type Props = {
  style?: object;
};

const Letterpress: FunctionComponent<Props> = (props) => {
  const [loaded] = useFonts({
    AKA_DYLAN_OPEN: FONTS.EN.COMICS.AKA_DYLAN_OPEN,
    AKA_DYLAN_COLLAGE: FONTS.EN.COMICS.AKA_DYLAN_COLLAGE,
    AKA_DYLAN_PLAIN: FONTS.EN.COMICS.AKA_DYLAN_PLAIN,
  });

  if (!loaded) {
    return null;
  }

  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_NAMES.AKA_DYLAN_PLAIN,
    fontSize: 20,
    color: "#0064d3",
  },
});

export default Letterpress;
