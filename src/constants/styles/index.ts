import { StyleSheet } from "react-native";

/** Enumerations */
import { COLORS } from "./Colors";
import { MARGIN } from "./Margin";
import { PADDING } from "./Padding";

const SCREEN = {
  screen: {
    flex: 1,
    paddingVertical: PADDING.L,
    paddingHorizontal: PADDING.M,
    backgroundColor: COLORS.BG_PRIMARY,
  },
};

const HEADER = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    height: 48,
  },
});

const FOOTER = StyleSheet.create({
  footer: {
    ...HEADER.header,
    justifyContent: "space-around",
  },
});

export const GLOBAL_STYLES = StyleSheet.create({
  screen: { ...SCREEN.screen },
  header: {
    ...HEADER.header,
    marginBottom: MARGIN.M,
  },
  footer: {
    ...FOOTER.footer,
    marginTop: MARGIN.M,
  },
});
