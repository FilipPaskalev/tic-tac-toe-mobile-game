import React, { FunctionComponent } from "react";
import { useRoute } from "@react-navigation/native";
import { View, StyleSheet, Button } from "react-native";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";
import { SIZES } from "../constants/sizes";
import { GLOBAL_STYLES } from "../constants/styles";

/** Components */
import RoundButton from "./buttons/RoundButton";
import { SCREE_NAMES } from "../constants/ScreenNames";
import { BUTTON_ACTIONS } from "../constants/ButtonActions";

type Props = {
  style?: object;
};

const CustomFooter: FunctionComponent<Props> = (props) => {
  const screenName = useRoute().name;
  if (screenName === SCREE_NAMES.HOME) {
    return (
      <View style={[styles.container, props.style]}>
        <RoundButton
          // source={GRAPHICS.ICONS.SHARE}
          action={BUTTON_ACTIONS.OPEN_SHARE_MODAL}
        />
        <RoundButton
          // source={GRAPHICS.ICONS.STORE}
          action={BUTTON_ACTIONS.OPEN_GOOGLE_STORE}
        />
        <RoundButton
          // source={GRAPHICS.ICONS.LIKE_US}
          action={BUTTON_ACTIONS.RATE_APP}
        />
        <RoundButton
          // source={GRAPHICS.ICONS.QUESTION}
          action={BUTTON_ACTIONS.NAVIGATE_TO_FAQ_SCREEN}
        />
      </View>
    );
  } else {
    return (
      <View style={[styles.container, props.style]}>
        <RoundButton
          // source={GRAPHICS.ICONS.NO_SOUND}
          action={BUTTON_ACTIONS.TOGGLE_SOUNDS}
        />
        <RoundButton
          // source={GRAPHICS.ICONS.MUSIC_NOTES}
          action={BUTTON_ACTIONS.TOGGLE_MUSIC}
        />
        <RoundButton
          // source={GRAPHICS.ICONS.QUESTION}
          action={BUTTON_ACTIONS.NAVIGATE_TO_FAQ_SCREEN}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.footer,
  },
  icon: {
    ...SIZES.BTN_ROUND_M,
    backgroundColor: "#FFF",
  },
});

export default CustomFooter;
