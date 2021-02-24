import React, { FunctionComponent } from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
  style?: object;
};

const Letterpress: FunctionComponent<Props> = (props) => {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {},
});

export default Letterpress;
