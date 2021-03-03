import React, { FunctionComponent } from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import i18n from "i18n-js";

/** Components */
import Letterpress from "../Letterpress";

/** Enumerations */
import { BUTTON_ACTIONS } from "../../constants/ButtonActions";
import { SCREE_NAMES } from "../../constants/ScreenNames";
import { I18N_KEYS } from "../../constants/I18nKeys";

/** Constants */
import { GRAPHICS } from "../../constants/Graphics";
import { SIZES } from "../../constants/sizes";
import { MARGIN } from "../../constants/styles/Margin";

type Props = {
  style?: object;
  action?: BUTTON_ACTIONS;
};

const FlatButton: FunctionComponent<Props> = (props) => {
  const navigation = useNavigation();
  const label = getLabel();

  function getLabel() {
    switch (props.action) {
      case BUTTON_ACTIONS.NAVIGATE_TO_SINGLE_PLAYER_SETTINGS_SCREEN: {
        return i18n.t(I18N_KEYS.singlePlayer);
      }
      case BUTTON_ACTIONS.NAVIGATE_TO_SINGLE_PLAYER_GAME_SCREEN: {
        return i18n.t(I18N_KEYS.start);
      }
      case BUTTON_ACTIONS.EXIT_FROM_APP: {
        return i18n.t(I18N_KEYS.exit);
      }
      default: {
        return "";
      }
    }
  }

  function actionExecuter() {
    switch (props.action) {
      case BUTTON_ACTIONS.NAVIGATE_TO_SINGLE_PLAYER_SETTINGS_SCREEN: {
        navigation.navigate(SCREE_NAMES.SINGLE_PLAYERS_SETTINGS);
        break;
      }
      case BUTTON_ACTIONS.NAVIGATE_TO_SINGLE_PLAYER_GAME_SCREEN: {
        navigation.navigate(SCREE_NAMES.SINGLE_PLAYERS_GAME);
        break;
      }
      default: {
        break;
      }
    }
  }

  return (
    <TouchableOpacity style={props.style} onPress={() => actionExecuter()}>
      <ImageBackground source={GRAPHICS.BUTTONS.FLAT} style={styles.image}>
        <Letterpress>{label}</Letterpress>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    // width: "100%",
    // height: "100%",
    justifyContent: "center",
    alignItems: "center",
    ...SIZES.BTN_FLAT_M,
    marginVertical: MARGIN.M,
  },
});

export default FlatButton;
