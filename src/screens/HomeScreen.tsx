import React, { FunctionComponent } from "react";
import { View, StatusBar, StyleSheet } from "react-native";

/** Components */
import CustomFooter from "../components/CustomFooter";
import CustomHeader from "../components/CustomHeader";
import FlatButton from "../components/buttons/FlatButton";

/** Constants */
import { GLOBAL_STYLES } from "../constants/styles";

/** Enumerations */
import { MARGIN } from "../constants/styles/Margin";
import { BUTTON_ACTIONS } from "../constants/ButtonActions";

type Props = {};

const HomeScreen: FunctionComponent<Props> = (props) => {
  console.log("LOAD ===> HomeScreen.tsx");
  return (
    <View style={styles.screen}>
      <StatusBar hidden={true} />
      <CustomHeader />
      <View style={styles.body}>
        <View style={styles.navigationContainer}>
          <FlatButton
            action={BUTTON_ACTIONS.NAVIGATE_TO_SINGLE_PLAYER_SETTINGS_SCREEN}
          />
          <FlatButton />
          <FlatButton />
          <FlatButton />
        </View>
        <View />
        <View style={styles.exitContainer}>
          <FlatButton action={BUTTON_ACTIONS.EXIT_FROM_APP} />
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
  },
  navigationContainer: {
    // borderWidth: 1,
    flex: 6,
    justifyContent: "center",
  },
  exitContainer: {
    // borderWidth: 1,
    justifyContent: "center",
    marginBottom: MARGIN.M,
  },
});

export default HomeScreen;
