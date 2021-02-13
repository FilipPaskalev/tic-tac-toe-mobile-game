import React from "react";
import { StyleSheet, View } from "react-native";

/** Constants */
import { SCREEN_INFO } from "../constants/ScreensInfo";
import { GRAPHICS } from "../constants/Graphics";

/** Components */
import LetterPress from "./LetterPress";
import SquareButton from "./SquareButton";

type CustomHeaderProps = {
  title: string;
};

function CustomHeader({ title }: CustomHeaderProps) {
  switch (title) {
    case SCREEN_INFO.HOME.TITLE: {
      return (
        <View style={styles.container}>
          <SquareButton
            navigateToScreen={SCREEN_INFO.PROFILE.NAME}
            graphic={GRAPHICS.ICONS.USER}
          />
          <LetterPress context={title} setFontSize={28} />
          <SquareButton
            navigateToScreen={SCREEN_INFO.SETTINGS.NAME}
            graphic={GRAPHICS.ICONS.SETTINGS}
          />
        </View>
      );
    }
    case SCREEN_INFO.SETTINGS.TITLE: {
      return (
        <View style={styles.container}>
          <LetterPress context={title} setFontSize={28} />
          <SquareButton graphic={GRAPHICS.ICONS.SAVE} />
        </View>
      );
    }
    case SCREEN_INFO.PROFILE.TITLE: {
      return (
        <View style={styles.container}>
          <LetterPress context={title} setFontSize={28} />
          <SquareButton graphic={GRAPHICS.ICONS.SAVE} />
        </View>
      );
    }
    default: {
      return <LetterPress context={title} setFontSize={28} />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    fontSize: 30,
  },
});

export default CustomHeader;
