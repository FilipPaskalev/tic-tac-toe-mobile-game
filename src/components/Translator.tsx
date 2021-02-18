import React, { FunctionComponent } from "react";
import i18n from "i18n-js";
import { useFonts } from "expo-font";
import { StyleSheet, Text } from "react-native";
import LetterPress from "./LetterPress";

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: require("./src/translation/en.json"),
  // bg: require("./src/translation/bg.json"),
};

type Props = {
  key: string;
};

const Translator: FunctionComponent<Props> = ({ key }: Props) => {
  return <LetterPress>{i18n.t(key)}</LetterPress>;
};

const styles = StyleSheet.create({});

export default Translator;
