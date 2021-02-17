import React from "react";
import { StyleSheet, View } from "react-native";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";
import { useRoute } from "@react-navigation/native";

/** Custom components */
import LetterPress from "./LetterPress";
import SquareButton from "./SquareButton";

/** Enumerations & constants */
import { SCREEN_NAMES } from "../constants/ScreenNames";

function setRightIcon(routeName: string) {
  switch (routeName) {
    case SCREEN_NAMES.home: {
      return (
        <SquareButton
          graphic={GRAPHICS.ICONS.settings}
          goToScreen={SCREEN_NAMES.settings}
        />
      );
    }
    case SCREEN_NAMES.settings: {
      return <SquareButton graphic={GRAPHICS.ICONS.save} />;
    }
    case SCREEN_NAMES.profile: {
      return <SquareButton graphic={GRAPHICS.ICONS.save} />;
    }
    default: {
      return <SquareButton graphic={GRAPHICS.ICONS.empty} />;
    }
  }
}

interface CustomHeaderProps {
  title: string;
}

function CustomHeader({ title }: CustomHeaderProps) {
  const route = useRoute();
  return (
    <View style={styles.container}>
      {route.name === SCREEN_NAMES.home && (
        <SquareButton
          graphic={GRAPHICS.ICONS.user}
          goToScreen={SCREEN_NAMES.profile}
        />
      )}
      <LetterPress content={title} textStyles={styles.headerStyles} />
      {setRightIcon(route.name)}
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
