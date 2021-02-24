import React, { FunctionComponent } from "react";
import { View, StyleSheet } from "react-native";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";
import { GLOBAL_STYLES } from "../constants/styles";
import { BUTTON_ACTIONS } from "../constants/ButtonActions";

/** Enumerations */
import { MARGIN } from "../constants/styles/Margin";

/** Components */
import RoundButton from "./buttons/RoundButton";
import Letterpress from "./Letterpress";

type Props = {
  style?: object;
  title?: string;
};

const CustomHeader: FunctionComponent<Props> = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <RoundButton
        source={GRAPHICS.ICONS.AVATAR}
        action={BUTTON_ACTIONS.NAVIGATE_TO_PROFILE_SCREEN}
      />
      <View style={styles.titleContainer}>
        <Letterpress>{props.title}</Letterpress>
      </View>
      <RoundButton
        source={GRAPHICS.ICONS.SETTINGS}
        action={BUTTON_ACTIONS.NAVIGATE_TO_SETTINGS_SCREEN}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.header,
  },
  titleContainer: {
    flexGrow: 1,
    marginHorizontal: MARGIN.M,
    // backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomHeader;
