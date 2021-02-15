import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View } from "react-native";

/**Hooks */
import { useHeaderHeight } from "@react-navigation/stack";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";

/** Custom components */
import FlatButton from "../components/FlatButton";
import SquareButton from "../components/SquareButton";
import { SCREEN_INFO } from "../constants/ScreensInfo";
import { COLORS } from "../constants/Colors";

function HomeScreen() {
  return (
    <View style={[styles.screen, { paddingTop: useHeaderHeight() }]}>
      <StatusBar style="auto" />
      <Image source={GRAPHICS.IMAGES.logo} style={styles.logoContainer} />
      <View style={styles.buttonsContainer}>
        <FlatButton label={"Player vs AI"} buttonStyles={styles.button} />
        <FlatButton label={"Player vs Player"} buttonStyles={styles.button} />
        <FlatButton label={"Play online"} buttonStyles={styles.button} />
        <FlatButton label={"Score Board"} buttonStyles={styles.button} />
      </View>
      <View style={styles.footerContainer}>
        <SquareButton graphic={GRAPHICS.ICONS.rateUs} />
        <SquareButton
          graphic={GRAPHICS.ICONS.faq}
          navigateToScreen={SCREEN_INFO.FAQ.NAME}
        />
        <SquareButton graphic={GRAPHICS.ICONS.puzzle} />
        <SquareButton graphic={GRAPHICS.ICONS.translation} />
        <SquareButton graphic={GRAPHICS.ICONS.exit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.BACKGROUND.APP.primary,
  },
  logoContainer: {
    borderWidth: 1,
    flex: 1,
    width: "100%",
  },
  buttonsContainer: {
    // borderWidth: 1,
  },
  button: {
    margin: 8,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeScreen;
