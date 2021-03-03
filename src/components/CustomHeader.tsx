import React, { FunctionComponent, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import i18n from "i18n-js";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";
import { GLOBAL_STYLES } from "../constants/styles";

/** Enumerations */
import { BUTTON_ACTIONS } from "../constants/ButtonActions";
import { MARGIN } from "../constants/styles/Margin";
import { SCREE_NAMES } from "../constants/ScreenNames";

/** Components */
import RoundButton from "./buttons/RoundButton";
import Letterpress from "./Letterpress";
import { I18N_KEYS } from "../constants/I18nKeys";

type Props = {
  style?: object;
};

const CustomHeader: FunctionComponent<Props> = (props) => {
  const screenName = useRoute().name;

  const setRightIcon = (screenName: string) => {
    switch (screenName) {
      case SCREE_NAMES.HOME: {
        return (
          <RoundButton action={BUTTON_ACTIONS.NAVIGATE_TO_SETTINGS_SCREEN} />
        );
      }
      default: {
        return <View />;
      }
    }
  };

  const setLeftIcon = (screenName: string) => {
    switch (screenName) {
      case SCREE_NAMES.HOME: {
        return (
          <RoundButton action={BUTTON_ACTIONS.NAVIGATE_TO_PROFILE_SCREEN} />
        );
      }
      case SCREE_NAMES.SINGLE_PLAYERS_GAME: {
        return <RoundButton action={BUTTON_ACTIONS.NAVIGATE_TO_HOME_SCREEN} />;
      }
      default: {
        return (
          <RoundButton action={BUTTON_ACTIONS.NAVIGATE_TO_PREVIOUS_SCREEN} />
        );
      }
    }
  };

  const setHeaderTitle = (screenName: string) => {
    switch (screenName) {
      case SCREE_NAMES.HOME: {
        return i18n.t(I18N_KEYS.homeScreenTitle);
      }
      case SCREE_NAMES.SETTINGS: {
        return i18n.t(I18N_KEYS.settingsScreenTitle);
      }
      case SCREE_NAMES.PROFILE: {
        return i18n.t(I18N_KEYS.profileScreenTitle);
      }
      case SCREE_NAMES.FAQ: {
        return i18n.t(I18N_KEYS.profileScreenTitle);
      }
      case SCREE_NAMES.SINGLE_PLAYERS_SETTINGS: {
        return i18n.t(I18N_KEYS.singlePlayerSettingsScreenTitle);
      }
      case SCREE_NAMES.SINGLE_PLAYERS_GAME: {
        return i18n.t(I18N_KEYS.singlePlayerGameScreenTitle);
      }
      default: {
        return "";
      }
    }
  };

  return (
    <View style={[styles.container, props.style]}>
      {setLeftIcon(screenName)}
      <View style={styles.titleContainer}>
        <Letterpress>{setHeaderTitle(screenName)}</Letterpress>
      </View>
      {setRightIcon(screenName)}
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
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomHeader;
