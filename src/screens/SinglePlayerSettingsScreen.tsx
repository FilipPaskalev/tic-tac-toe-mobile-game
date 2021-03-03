import React, { FunctionComponent } from "react";
import { Text, View, StatusBar, StyleSheet } from "react-native";

/** Constants */
import { GLOBAL_STYLES } from "../constants/styles";

/** Enumerations */
import { MARGIN } from "../constants/styles/Margin";

/** Components */
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import CustomPicker from "../components/CustomPicker";
import { PICKER_TYPES } from "../constants/PickerTypes";
import FlatButton from "../components/buttons/FlatButton";
import { BUTTON_ACTIONS } from "../constants/ButtonActions";

type Props = {};

const SinglePlayerSettingsScreen: FunctionComponent<Props> = (props) => {
  console.log("LOAD ===> SinglePlayerScreen.tsx");
  return (
    <View style={styles.screen}>
      <StatusBar hidden={true} />
      <CustomHeader />
      <View style={styles.body}>
        <CustomPicker type={PICKER_TYPES.CHOOSE_YOUR_SIDE} />
        <CustomPicker type={PICKER_TYPES.CHOOSE_FIRST_PLAYER} />
        <CustomPicker type={PICKER_TYPES.DIFFICULTY_LEVEL} />
      </View>
      <FlatButton
        action={BUTTON_ACTIONS.NAVIGATE_TO_SINGLE_PLAYER_GAME_SCREEN}
      />
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
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: MARGIN.M,
    flexDirection: "column",
  },
});

export default SinglePlayerSettingsScreen;
