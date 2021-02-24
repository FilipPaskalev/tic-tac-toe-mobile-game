import React, { FunctionComponent } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

/** Constants */
import { GRAPHICS } from "../../constants/Graphics";

/** Enumerations */
import { BUTTON_ACTIONS } from "../../constants/ButtonActions";
import { SIZES } from "../../constants/sizes";

type Props = {
  style?: object;
  source?: object;
  action?: BUTTON_ACTIONS;
};

const RoundButton: FunctionComponent<Props> = (props) => {
  const navigation = useNavigation();

  const actionExecuter = (actionType: BUTTON_ACTIONS) => {
    switch (actionType) {
      case BUTTON_ACTIONS.NAVIGATE_TO_HOME_SCREEN: {
        navigation.navigate("Home");
        break;
      }
      case BUTTON_ACTIONS.NAVIGATE_TO_PROFILE_SCREEN: {
        navigation.navigate("Profile");
        break;
      }
      case BUTTON_ACTIONS.NAVIGATE_TO_SETTINGS_SCREEN: {
        navigation.navigate("Settings");
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
        source={GRAPHICS.BUTTONS.ROUND_BTN}
        style={styles.button}
      >
        {props.source && <Image source={props.source} style={styles.icon} />}
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    ...SIZES.BTN_ROUND_L,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    ...SIZES.ICON_L,
  },
});

export default RoundButton;
