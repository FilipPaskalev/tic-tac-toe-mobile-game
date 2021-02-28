import React, { FunctionComponent, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

/** Constants */
import { GRAPHICS } from "../../constants/Graphics";
import { SIZES } from "../../constants/sizes";

/** Enumerations */
import { BUTTON_ACTIONS } from "../../constants/ButtonActions";
import { SCREE_NAMES } from "../../constants/ScreenNames";

type Props = {
  style?: object;
  action?: BUTTON_ACTIONS;
};

function getGraphic(actionType?: BUTTON_ACTIONS) {
  switch (actionType) {
    case BUTTON_ACTIONS.NAVIGATE_TO_HOME_SCREEN: {
      return GRAPHICS.ICONS.ARROW;
    }
    case BUTTON_ACTIONS.NAVIGATE_TO_PROFILE_SCREEN: {
      return GRAPHICS.ICONS.AVATAR;
    }
    case BUTTON_ACTIONS.NAVIGATE_TO_SETTINGS_SCREEN: {
      return GRAPHICS.ICONS.SETTINGS;
    }
    case BUTTON_ACTIONS.NAVIGATE_TO_FAQ_SCREEN: {
      return GRAPHICS.ICONS.QUESTION;
    }
    case BUTTON_ACTIONS.OPEN_GOOGLE_STORE: {
      return GRAPHICS.ICONS.STORE;
    }
    case BUTTON_ACTIONS.RATE_APP: {
      return GRAPHICS.ICONS.LIKE_US;
    }
    case BUTTON_ACTIONS.TOGGLE_MUSIC: {
      return GRAPHICS.ICONS.MUSIC_NOTES;
    }
    case BUTTON_ACTIONS.TOGGLE_SOUNDS: {
      return GRAPHICS.ICONS.NO_SOUND;
    }
    case BUTTON_ACTIONS.OPEN_SHARE_MODAL: {
      return GRAPHICS.ICONS.SHARE;
    }
    default: {
      return GRAPHICS.ICONS.EMPTY;
    }
  }
}

const RoundButton: FunctionComponent<Props> = (props) => {
  const navigation = useNavigation();
  const icon = getGraphic(props.action);

  const actionExecuter = (actionType: BUTTON_ACTIONS) => {
    switch (actionType) {
      case BUTTON_ACTIONS.NAVIGATE_TO_HOME_SCREEN: {
        navigation.navigate(SCREE_NAMES.HOME);
        break;
      }
      case BUTTON_ACTIONS.NAVIGATE_TO_PROFILE_SCREEN: {
        navigation.navigate(SCREE_NAMES.PROFILE);
        break;
      }
      case BUTTON_ACTIONS.NAVIGATE_TO_SETTINGS_SCREEN: {
        navigation.navigate(SCREE_NAMES.SETTINGS);
        break;
      }
      case BUTTON_ACTIONS.NAVIGATE_TO_FAQ_SCREEN: {
        navigation.navigate(SCREE_NAMES.FAQ);
        break;
      }
      case BUTTON_ACTIONS.OPEN_GOOGLE_STORE: {
        navigation.navigate(SCREE_NAMES.FAQ);
        break;
      }
      case BUTTON_ACTIONS.RATE_APP: {
        navigation.navigate(SCREE_NAMES.FAQ);
        break;
      }
      case BUTTON_ACTIONS.TOGGLE_MUSIC: {
        navigation.navigate(SCREE_NAMES.FAQ);
        break;
      }
      case BUTTON_ACTIONS.TOGGLE_SOUNDS: {
        navigation.navigate(SCREE_NAMES.FAQ);
        break;
      }
      case BUTTON_ACTIONS.TOGGLE_SOUNDS: {
        navigation.navigate(SCREE_NAMES.FAQ);
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <TouchableOpacity
      style={props.style}
      onPress={() => props.action && actionExecuter(props.action)}
    >
      <ImageBackground source={GRAPHICS.BUTTONS.ROUND} style={styles.button}>
        <Image source={icon} style={styles.icon} />
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    ...SIZES.BTN_ROUND_XL,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    ...SIZES.ICON_M,
  },
});

export default RoundButton;
