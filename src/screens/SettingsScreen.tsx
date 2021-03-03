import React, { FunctionComponent } from "react";
import { View, StatusBar, StyleSheet } from "react-native";

/** Constants */
import { GLOBAL_STYLES } from "../constants/styles";

/** Enumerations */
import { MARGIN } from "../constants/styles/Margin";
import { PICKER_TYPES } from "../constants/PickerTypes";

/** Components */
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";
import FlatButton from "../components/buttons/FlatButton";
import CustomPicker from "../components/CustomPicker";
import { BUTTON_ACTIONS } from "../constants/ButtonActions";

type Props = {};

const SettingsScreen: FunctionComponent<Props> = (props) => {
  console.log("LOAD ===> SettingsScreen.tsx LOAD");
  return (
    <View style={styles.screen}>
      <StatusBar hidden={true} />
      <CustomHeader />
      <View style={styles.body}>
        <View style={styles.fieldContainer}>
          <CustomPicker type={PICKER_TYPES.LANGUAGE} />
        </View>
        <View style={styles.fieldContainer}>
          <CustomPicker type={PICKER_TYPES.THEME} />
        </View>
        <View style={styles.fieldContainer}>
          <CustomPicker type={PICKER_TYPES.DIFFICULTY_LEVEL} />
        </View>
        <FlatButton />
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
    flex: 1,
    alignItems: "center",
    marginTop: MARGIN.M,
    flexDirection: "column",
  },
  fieldContainer: {
    flexGrow: 1,
  },
});

export default SettingsScreen;
