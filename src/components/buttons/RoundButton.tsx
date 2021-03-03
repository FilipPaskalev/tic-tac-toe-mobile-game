import React, { FunctionComponent, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

/** Constants */
import { SIZES } from "../../constants/sizes";
import {
  getRoundButtonIcon,
  getRoundButtonBackground,
} from "../../constants/Graphics";

/** Enumerations */
import { BUTTON_ACTIONS } from "../../constants/ButtonActions";
import { SCREE_NAMES } from "../../constants/ScreenNames";

type Props = {
  style?: object;
  action?: BUTTON_ACTIONS;
};

const RoundButton: FunctionComponent<Props> = (props) => {
  const navigation = useNavigation();
  const [icon, setIcon] = useState(getRoundButtonIcon(props.action));
  const [soundState, setSoundState] = useState(BUTTON_ACTIONS.SOUNDS_OFF);
  const [musicState, setMusicState] = useState(BUTTON_ACTIONS.MUSIC_OFF);

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
      case BUTTON_ACTIONS.NAVIGATE_TO_PREVIOUS_SCREEN: {
        navigation.goBack();
        break;
      }
      case BUTTON_ACTIONS.NAVIGATE_TO_FAQ_SCREEN: {
        navigation.navigate(SCREE_NAMES.FAQ);
        break;
      }
      case BUTTON_ACTIONS.OPEN_GOOGLE_APP_STORE: {
        break;
      }
      case BUTTON_ACTIONS.RATE_APP: {
        break;
      }
      case BUTTON_ACTIONS.TOGGLE_MUSIC: {
        musicState === BUTTON_ACTIONS.MUSIC_ON
          ? setMusicState(BUTTON_ACTIONS.MUSIC_OFF)
          : setMusicState(BUTTON_ACTIONS.MUSIC_ON);
        setIcon(getRoundButtonIcon(musicState));
        break;
      }
      case BUTTON_ACTIONS.TOGGLE_SOUND: {
        soundState === BUTTON_ACTIONS.SOUNDS_ON
          ? setSoundState(BUTTON_ACTIONS.SOUNDS_OFF)
          : setSoundState(BUTTON_ACTIONS.SOUNDS_ON);
        setIcon(getRoundButtonIcon(soundState));
        break;
      }
      case BUTTON_ACTIONS.OPEN_SHARE_MODAL: {
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
      <ImageBackground
        source={getRoundButtonBackground()}
        style={styles.button}
      >
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
