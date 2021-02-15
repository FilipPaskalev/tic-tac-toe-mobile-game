import React from "react";
import { StyleSheet, View } from "react-native";

/**Hooks */
import { useRoute } from "@react-navigation/native";

/** Constants */
import { getScreenTitle, SCREEN_INFO } from "../constants/ScreensInfo";
import { GRAPHICS } from "../constants/Graphics";

/** Custom components */
import LetterPress from "./LetterPress";
import SquareButton from "./SquareButton";

function CustomHeader() {
  const route = useRoute();
  let title = getScreenTitle(route.name);

  function setLeftIcon() {
    if (title === SCREEN_INFO.HOME.title) {
      return (
        <SquareButton
          graphic={GRAPHICS.ICONS.user}
          goToScreen={SCREEN_INFO.PROFILE.name}
        />
      );
    }
  }

  function setRightIcon() {
    switch (title) {
      case SCREEN_INFO.HOME.title: {
        return (
          <SquareButton
            graphic={GRAPHICS.ICONS.settings}
            goToScreen={SCREEN_INFO.SETTINGS.name}
          />
        );
      }
      case SCREEN_INFO.PROFILE.title: {
        return <SquareButton graphic={GRAPHICS.ICONS.save} />;
      }
      case SCREEN_INFO.SETTINGS.title: {
        return <SquareButton graphic={GRAPHICS.ICONS.save} />;
      }
      default: {
        return <SquareButton graphic={GRAPHICS.ICONS.empty} />;
      }
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
