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

type Props = {
  style?: object;
  action?: BUTTON_ACTIONS;
};

const FlatButton: FunctionComponent<Props> = (props) => {
  const navigation = useNavigation();
  const label = getLabel();

  function getLabel() {
    switch (props.action) {
      case BUTTON_ACTIONS.NAVIGATE_TO_SINGLE_PLAYER_SCREEN: {
        return i18n.t(I18N_KEYS.singlePlayer);
      }
      case BUTTON_ACTIONS.NAVIGATE_TO_MULTIPLAYER_SCREEN: {
        return i18n.t(I18N_KEYS.multiplayer);
      }
      case BUTTON_ACTIONS.NAVIGATE_TO_PLAY_ONLINE_SCREEN: {
        return i18n.t(I18N_KEYS.playOnline);
      }
      case BUTTON_ACTIONS.NAVIGATE_TO_SCORE_BOARD_SCREEN: {
        return i18n.t(I18N_KEYS.score);
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
      case BUTTON_ACTIONS.NAVIGATE_TO_SINGLE_PLAYER_SCREEN: {
        navigation.navigate(SCREE_NAMES.SINGLE_PLAYER);
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
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FlatButton;
