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

const SinglePlayerGameScreen: FunctionComponent<Props> = (props) => {
  console.log("LOAD ===> SinglePlayerGameScreen.tsx");
  return (
    <View style={styles.screen}>
      <StatusBar hidden={true} />
      <CustomHeader />
      <View style={styles.body}>
        <Text>SinglePlayerGameScreen</Text>
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
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: MARGIN.M,
    flexDirection: "column",
  },
});

export default SinglePlayerGameScreen;
