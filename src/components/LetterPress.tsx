import React, { FunctionComponent } from "react";
import i18n from "i18n-js";
import { useFonts } from "expo-font";
import { StyleSheet, Text } from "react-native";

import { supportedLanguages } from "../languages";

/** Set the supported languages */
i18n.translations = supportedLanguages;

type Props = {};

const LetterPress: FunctionComponent<Props> = ({ children }) => {
  return <Text>{children}</Text>;
};

export default LetterPress;
