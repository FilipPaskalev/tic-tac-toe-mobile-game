import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View } from "react-native";

/**Hooks */
import { useHeaderHeight } from "@react-navigation/stack";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";
import { COLORS } from "../constants/Colors";

/** Custom components */
import FlatButton from "../components/FlatButton";
import SquareButton from "../components/SquareButton";
import Footer from "../components/Footer";

function HomeScreen() {
  const headerHeight = useHeaderHeight();
  return (
    <View style={[styles.screen, { paddingTop: headerHeight }]}>
      <StatusBar style="auto" />
      <Image source={GRAPHICS.IMAGES.logo} style={styles.logoContainer} />
      {/* <View style={styles.buttonsContainer}>
        <FlatButton
          label={"Player vs AI"}
          buttonStyles={styles.button}
          goToScreen={SCREEN_INFO.ONE_PLAYER.name}
        />
        <FlatButton
          label={"Player vs Player"}
          buttonStyles={styles.button}
          goToScreen={SCREEN_INFO.TWO_PLAYERS.name}
        />
        <FlatButton
          label={"Play online"}
          buttonStyles={styles.button}
          goToScreen={SCREEN_INFO.MULTIPLAYER.name}
        />
        <FlatButton
          label={"Score Board"}
          buttonStyles={styles.button}
          goToScreen={SCREEN_INFO.SCORE_BOARD.name}
        />
      </View> */}
      {/* <View style={styles.footerContainer}>
        <SquareButton graphic={GRAPHICS.ICONS.rateUs} />
        <SquareButton
          graphic={GRAPHICS.ICONS.faq}
          goToScreen={SCREEN_INFO.FAQ.name}
        />
        <SquareButton graphic={GRAPHICS.ICONS.puzzle} />
        <SquareButton graphic={GRAPHICS.ICONS.translation} />
        <SquareButton graphic={GRAPHICS.ICONS.exit} />
      </View> */}
      {/* <Footer /> */}
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
  buttonsContainer: {},
  button: {
    margin: 8,
  },
});

export default HomeScreen;
