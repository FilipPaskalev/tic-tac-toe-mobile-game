import React, { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";
/** Custom components */
import LetterPress from "./LetterPress";
import SquareButton from "./SquareButton";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";
import { BUTTON_SIZES } from "../constants/ButtonSizes";
import { TouchableOpacity } from "react-native-gesture-handler";

interface CustomSwitchProps {
  enabled?: boolean;
  label?: string;
  target?: string;
  containerStyles?: object;
  informationIconStyles?: object;
}

function CustomSwitch({
  enabled,
  label,
  target,
  containerStyles,
  informationIconStyles,
}: CustomSwitchProps) {
  const [isEnabled, setIsEnabled] = useState(
    enabled && enabled ? enabled : true
  );

  return (
    <View style={[styles.container, containerStyles]}>
      <LetterPress content={label} />
      {/* <View style={{ flexGrow: 1 }} /> */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            isEnabled ? styles.enabledButton : styles.disabledButton,
          ]}
          onPress={() => setIsEnabled(true)}
        >
          <LetterPress content={"ON"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            !isEnabled ? styles.enabledButton : styles.disabledButton,
          ]}
          onPress={() => setIsEnabled(false)}
        >
          <LetterPress content={"OFF"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    // height: 48,
    // width: "100%",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    // flex: 1,
    width: 48,
    height: 48,
    borderWidth: 1,
    // alignItems: "center",
    // justifyContent: "center",
    borderRadius: 6,
  },
  enabledButton: {
    backgroundColor: "#81b0ff",
  },
  disabledButton: {
    backgroundColor: "#767577",
  },
});

export default CustomSwitch;
