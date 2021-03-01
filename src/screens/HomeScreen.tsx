import React, { FunctionComponent } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import i18n from "i18n-js";

/** Components */
import CustomFooter from "../components/CustomFooter";
import CustomHeader from "../components/CustomHeader";
import FlatButton from "../components/buttons/FlatButton";

/** Constants */
import { GLOBAL_STYLES } from "../constants/styles";

/** Enumerations */
import { MARGIN } from "../constants/styles/Margin";
import { I18N_KEYS } from "../constants/I18nKeys";
import { SIZES } from "../constants/sizes";
import { BUTTON_ACTIONS } from "../constants/ButtonActions";

type Props = {};

const HomeScreen: FunctionComponent<Props> = (props) => {
  console.log("========== HomeScreen.tsx LOAD ===========");
  return (
    <View style={styles.screen}>
      <StatusBar hidden={true} />
      <CustomHeader />
      <View style={styles.body}>
        <View style={styles.navigationContainer}>
          <FlatButton
            style={styles.button}
            action={BUTTON_ACTIONS.NAVIGATE_TO_SINGLE_PLAYER_SCREEN}
          />
          <FlatButton
            style={styles.button}
            action={BUTTON_ACTIONS.NAVIGATE_TO_MULTIPLAYER_SCREEN}
          />
          <FlatButton
            style={styles.button}
            action={BUTTON_ACTIONS.NAVIGATE_TO_PLAY_ONLINE_SCREEN}
          />
          <FlatButton
            style={styles.button}
            action={BUTTON_ACTIONS.NAVIGATE_TO_SCORE_BOARD_SCREEN}
          />
        </View>
        <View />
        <View style={styles.exitContainer}>
          <FlatButton
            style={styles.exitButton}
            action={BUTTON_ACTIONS.EXIT_FROM_APP}
          />
        </View>
      </View>
      <CustomFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...GLOBAL_STYLES.screen,
  },
  body: {
    // borderWidth: 1,
    flex: 1,
    alignItems: "center",
    marginTop: MARGIN.M,
  },
  navigationContainer: {
    // borderWidth: 1,
    flex: 6,
    justifyContent: "center",
  },
  exitContainer: {
    // borderWidth: 1,
    justifyContent: "center",
    marginBottom: MARGIN.M,
  },
  button: {
    // borderWidth: 1,
    ...SIZES.BTN_FLAT_M,
    marginVertical: MARGIN.M,
  },
  exitButton: {
    ...SIZES.BTN_FLAT_M,
  },
});

export default HomeScreen;
