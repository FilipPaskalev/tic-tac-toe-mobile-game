import React, { FunctionComponent } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import CustomHeader from "../components/CustomHeader";
import I18n from "i18n-js";

/** Constants */
import { GLOBAL_STYLES } from "../constants/styles";
import { I18N_KEYS } from "../constants/I18nKeys";

type Props = {};

const SettingsScreen: FunctionComponent<Props> = (props) => {
  return (
    <View style={styles.screen}>
      <StatusBar hidden={true} />
      <CustomHeader title={I18n.t(I18N_KEYS.settingsScreenTitle)} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...GLOBAL_STYLES.screen,
  },
});

export default SettingsScreen;
