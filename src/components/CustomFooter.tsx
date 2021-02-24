import React, { FunctionComponent } from "react";
import { useRoute } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";
import { SIZES } from "../constants/sizes";
import { GLOBAL_STYLES } from "../constants/styles";

/** Components */
import RoundButton from "./buttons/RoundButton";
import { SCREE_NAMES } from "../constants/ScreenNames";

type Props = {
  style?: object;
};

const CustomFooter: FunctionComponent<Props> = (props) => {
  const screenName = useRoute().name;
  if (screenName === SCREE_NAMES.HOME) {
    return (
      <View style={[styles.container, props.style]}>
        <RoundButton source={GRAPHICS.ICONS.SHARE} />
        <RoundButton source={GRAPHICS.ICONS.STORE} />
        <RoundButton source={GRAPHICS.ICONS.LIKE_US} />
        <RoundButton source={GRAPHICS.ICONS.QUESTION} />
      </View>
    );
  } else {
    return (
      <View style={[styles.container, props.style]}>
        <RoundButton source={GRAPHICS.ICONS.NO_SOUND} />
        <RoundButton source={GRAPHICS.ICONS.MUSIC_NOTES} />
        <RoundButton source={GRAPHICS.ICONS.QUESTION} />
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
