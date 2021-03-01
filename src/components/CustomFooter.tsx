import React, { FunctionComponent } from "react";
import { useRoute } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";

/** Constants */
import { SIZES } from "../constants/sizes";
import { GLOBAL_STYLES } from "../constants/styles";

/** Components */
import RoundButton from "./buttons/RoundButton";

/** Enumerations */
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
        <RoundButton action={BUTTON_ACTIONS.OPEN_SHARE_MODAL} />
        <RoundButton action={BUTTON_ACTIONS.OPEN_GOOGLE_APP_STORE} />
        <RoundButton action={BUTTON_ACTIONS.RATE_APP} />
        <RoundButton action={BUTTON_ACTIONS.NAVIGATE_TO_FAQ_SCREEN} />
      </View>
    );
  } else {
    return (
      <View style={[styles.container, props.style]}>
        <RoundButton action={BUTTON_ACTIONS.TOGGLE_SOUND} />
        <RoundButton action={BUTTON_ACTIONS.TOGGLE_MUSIC} />
        <RoundButton action={BUTTON_ACTIONS.NAVIGATE_TO_FAQ_SCREEN} />
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
