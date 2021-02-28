import React, { FunctionComponent } from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

/** Constants */
import { SIZES } from "../../constants/sizes";

/** Components */
import Letterpress from "../Letterpress";

/** Enumerations */
import { BUTTON_ACTIONS } from "../../constants/ButtonActions";

type Props = {
  style?: object;
  source?: object;
  label?: string;
  action?: BUTTON_ACTIONS;
};

const FlatButton: FunctionComponent<Props> = (props) => {
  const navigation = useNavigation();

  function action(actionType: BUTTON_ACTIONS) {}

  return (
    <TouchableOpacity
      style={props.style}
      onPress={() => props.action && action(props.action)}
    >
      {props.source && (
        <ImageBackground source={props.source} style={styles.image}>
          {props.label && <Letterpress>{props.label}</Letterpress>}
        </ImageBackground>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FlatButton;
