import React, { FunctionComponent } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import i18n from "i18n-js";

/** Components */
import CustomFooter from "../components/CustomFooter";
import CustomHeader from "../components/CustomHeader";
import FlatButton from "../components/buttons/FlatButton";

/** Constants */
import { I18N_KEYS } from "../constants/I18nKeys";
import { GLOBAL_STYLES } from "../constants/styles";
import { GRAPHICS } from "../constants/Graphics";
import { MARGIN } from "../constants/styles/Margin";
import { PADDING } from "../constants/styles/Padding";

type Props = {};

const HomeScreen: FunctionComponent<Props> = (props) => {
  return (
    <View style={styles.screen}>
      <StatusBar hidden={true} />
      <CustomHeader title={i18n.t(I18N_KEYS.homeScreenTitle)} />
      <View style={styles.main}>
        <View style={styles.navigationContainer}>
          <FlatButton
            source={GRAPHICS.BUTTONS.FLAT_BTN}
            label={i18n.t(I18N_KEYS.singlePlayer)}
            style={styles.button}
          />
          <FlatButton
            source={GRAPHICS.BUTTONS.FLAT_BTN}
            label={i18n.t(I18N_KEYS.multiplayer)}
            style={styles.button}
          />
          <FlatButton
            source={GRAPHICS.BUTTONS.FLAT_BTN}
            label={i18n.t(I18N_KEYS.playOnline)}
            style={styles.button}
          />
          <FlatButton
            source={GRAPHICS.BUTTONS.FLAT_BTN}
            label={i18n.t(I18N_KEYS.score)}
            style={styles.button}
          />
        </View>
        <View />
        <View style={styles.exitContainer}>
          <FlatButton
            source={GRAPHICS.BUTTONS.FLAT_BTN}
            label={i18n.t(I18N_KEYS.exit)}
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
  main: {
    flex: 1,
    alignItems: "center",
  },
  navigationContainer: {
    flex: 6,
    justifyContent: "center",
  },
  exitContainer: {
    justifyContent: "center",
    marginBottom: MARGIN.M,
  },
  button: {
    paddingVertical: PADDING.M,
  },
});

export default HomeScreen;
