import React from "react";
import { StyleSheet, View } from "react-native";

/**Hooks */
import { useNavigation, useRoute } from "@react-navigation/native";

/** Constants */
import { SCREEN_INFO } from "../constants/ScreensInfo";
import { GRAPHICS } from "../constants/Graphics";

/** Custom components */
import LetterPress from "./LetterPress";
import SquareButton from "./SquareButton";

function CustomHeader() {
  let title: string = useRoute().name;

  switch (useRoute().name) {
    case SCREEN_INFO.HOME.name: {
      title = SCREEN_INFO.HOME.title;
      break;
    }
    case SCREEN_INFO.PROFILE.name: {
      title = SCREEN_INFO.PROFILE.title;
      break;
    }
    case SCREEN_INFO.SETTINGS.name: {
      title = SCREEN_INFO.SETTINGS.title;
      break;
    }
    default: {
      title = useRoute().name;
      break;
    }
  }

  function setLeftIcon() {
    if (title === SCREEN_INFO.HOME.title) {
      return (
        <SquareButton
          graphic={GRAPHICS.ICONS.user}
          navigateTo={SCREEN_INFO.PROFILE.name}
        />
      );
    }
  }

  function setRightIcon() {
    if (title === SCREEN_INFO.HOME.title) {
      return (
        <SquareButton
          graphic={GRAPHICS.ICONS.settings}
          navigateTo={SCREEN_INFO.SETTINGS.name}
        />
      );
    }

    if (
      title === SCREEN_INFO.PROFILE.title ||
      title === SCREEN_INFO.SETTINGS.title
    ) {
      return <SquareButton graphic={GRAPHICS.ICONS.save} />;
    }
  }

  return (
    <View style={styles.container}>
      {setLeftIcon()}
      <LetterPress content={title} textStyles={styles.headerStyles} />
      {setRightIcon()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerStyles: {
    fontSize: 26,
  },
});

export default CustomHeader;
