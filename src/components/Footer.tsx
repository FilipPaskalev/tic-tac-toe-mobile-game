import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View } from "react-native";

/**Hooks */
import { useHeaderHeight } from "@react-navigation/stack";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";
import { COLORS } from "../constants/Colors";
import { SCREEN_INFO } from "../constants/ScreensInfo";

/** Custom components */
import FlatButton from "../components/FlatButton";
import SquareButton from "../components/SquareButton";

function Footer() {
  return (
    <View style={styles.footerContainer}>
      <SquareButton graphic={GRAPHICS.ICONS.rateUs} />
      <SquareButton
        graphic={GRAPHICS.ICONS.faq}
        goToScreen={SCREEN_INFO.FAQ.name}
      />
      <SquareButton graphic={GRAPHICS.ICONS.puzzle} />
      <SquareButton graphic={GRAPHICS.ICONS.translation} />
      <SquareButton graphic={GRAPHICS.ICONS.exit} />
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Footer;
