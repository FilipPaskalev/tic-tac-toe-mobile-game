import React, { FunctionComponent } from "react";
import { Text, View, StatusBar, StyleSheet } from "react-native";
import i18n from "i18n-js";

/** Constants */
import { GLOBAL_STYLES } from "../constants/styles";

/** Enumerations */
import { MARGIN } from "../constants/styles/Margin";
import { I18N_KEYS } from "../constants/I18nKeys";
import { GRAPHICS } from "../constants/Graphics";
import { PADDING } from "../constants/styles/Padding";

/** Components */
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import FlatButton from "../components/buttons/FlatButton";
import CustomPicker from "../components/CustomPicker";
import { PICKER_TYPES } from "../constants/PickerTypes";
import { SIZES } from "../constants/sizes";
import { BUTTON_ACTIONS } from "../constants/ButtonActions";

type Props = {};

const SinglePlayerScreen: FunctionComponent<Props> = (props) => {
  console.log("======== SinglePlayerScreen.tsx LOAD =========");
  return (
    <View style={styles.screen}>
      <StatusBar hidden={true} />
      <CustomHeader />
      <View style={styles.body}>
        <View style={styles.fieldContainer}>
          <CustomPicker type={PICKER_TYPES.CHOOSE_YOUR_SIDE} />
        </View>
        <View style={styles.fieldContainer}>
          <CustomPicker type={PICKER_TYPES.DIFFICULTY_LEVEL} />
        </View>
        <View style={styles.fieldContainer}>
          <CustomPicker type={PICKER_TYPES.CHOOSE_FIRST_PLAYER} />
        </View>
        <View style={styles.bottomNavigation}>
          <FlatButton
            source={GRAPHICS.BUTTONS.FLAT}
            style={styles.bottomButton}
            label={i18n.t(I18N_KEYS.start)}
            action={BUTTON_ACTIONS.NAVIGATE_TO_GAME_SCREEN}
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
  body: {
    // borderWidth: 1,
    flex: 1,
    alignItems: "center",
    marginTop: MARGIN.M,
    flexDirection: "column",
  },
  fieldContainer: {
    // borderWidth: 1,
    flexGrow: 1,
  },
  bottomNavigation: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: PADDING.M,
  },
  bottomButton: {
    borderWidth: 1,
    ...SIZES.BTN_FLAT_M,
  },
});

export default SinglePlayerScreen;
