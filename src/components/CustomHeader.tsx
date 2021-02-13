import React from "react";
import { StyleSheet, View } from "react-native";

/** Constants */
import { SCREEN_INFO } from "../constants/ScreensInfo";

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
          <SquareButton navigateToScreen={SCREEN_INFO.PROFILE.NAME} />
          <LetterPress context={title} setFontSize={36} />
          <SquareButton navigateToScreen={SCREEN_INFO.SETTINGS.NAME} />
        </View>
      );
    }
    case SCREEN_INFO.SETTINGS.TITLE: {
      return (
        <View style={styles.container}>
          <LetterPress context={title} setFontSize={36} />
          <SquareButton navigateToScreen={SCREEN_INFO.SETTINGS.NAME} />
        </View>
      );
    }
    case SCREEN_INFO.PROFILE.TITLE: {
      return (
        <View style={styles.container}>
          <LetterPress context={title} setFontSize={36} />
          <SquareButton navigateToScreen={SCREEN_INFO.SETTINGS.NAME} />
        </View>
      );
    }
    default: {
      return <LetterPress context={title} setFontSize={36} />;
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
