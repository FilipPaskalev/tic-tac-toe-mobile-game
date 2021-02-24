import React, { FunctionComponent } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import I18n from "i18n-js";

/** Constants */
import { GLOBAL_STYLES } from "../constants/styles";

/** Enumerations */
import { I18N_KEYS } from "../constants/I18nKeys";

/** Components */
import CustomHeader from "../components/CustomHeader";
import CustomFooter from "../components/CustomFooter";

type Props = {};

const SettingsScreen: FunctionComponent<Props> = (props) => {
  return (
    <View style={styles.screen}>
      <StatusBar hidden={true} />
      <CustomHeader />
      <CustomFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...GLOBAL_STYLES.screen,
  },
});

export default SettingsScreen;
