import React, { FunctionComponent } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import I18n from "i18n-js";

/** Components */
import CustomHeader from "../components/CustomHeader";

/** Constants */
import { GLOBAL_STYLES } from "../constants/styles";
import { I18N_KEYS } from "../constants/I18nKeys";

type Props = {};

const FaqScreen: FunctionComponent<Props> = (props) => {
  return (
    <View style={styles.screen}>
      <StatusBar hidden={true} />
      <CustomHeader />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...GLOBAL_STYLES.screen,
  },
});

export default FaqScreen;
