import React from "react";
import { StyleSheet, View } from "react-native";

/** Constants */
import { SCREEN_INFO } from "../constants/ScreensInfo";
import { GRAPHICS } from "../constants/Graphics";

/** Components */
import LetterPress from "./LetterPress";
import SquareButton from "./SquareButton";

function setLeftIcon(title: string) {
  if (title === SCREEN_INFO.HOME.TITLE) {
    return (
      <SquareButton
        navigateToScreen={SCREEN_INFO.PROFILE.NAME}
        graphic={GRAPHICS.ICONS.user}
      />
    );
  }
}

function setRightIcon(title: string) {
  if (title === SCREEN_INFO.HOME.TITLE) {
    return (
      <SquareButton
        navigateToScreen={SCREEN_INFO.SETTINGS.NAME}
        graphic={GRAPHICS.ICONS.settings}
      />
    );
  }
  // prettier-ignore
  if (title === SCREEN_INFO.PROFILE.TITLE || title === SCREEN_INFO.SETTINGS.TITLE) {
    return (
      <SquareButton
        navigateToScreen={SCREEN_INFO.SETTINGS.NAME}
        graphic={GRAPHICS.ICONS.save}
      />
    );
  }
}

interface CustomHeaderProps {
  title: string;
}

function CustomHeader({ title }: CustomHeaderProps) {
  return (
    <View style={styles.container}>
      {setLeftIcon(title)}
      <LetterPress context={title} setFontSize={28} />
      {setRightIcon(title)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 30,
  },
});

export default CustomHeader;
