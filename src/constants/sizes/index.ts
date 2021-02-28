import { StyleSheet } from "react-native";

const ROUND_BUTTON_SIZES = StyleSheet.create({
  S: {
    width: 30,
    height: 30,
  },
  M: {
    width: 48,
    height: 48,
  },
  L: {
    width: 52,
    height: 52,
  },
  XL: {
    width: 58,
    height: 58,
  },
});

const FLAT_BUTTON_SIZES = StyleSheet.create({
  S: {
    width: 200,
    height: 60,
  },
  M: {
    width: 234,
    height: 72,
  },
  L: {
    width: 280,
    height: 86,
  },
  XL: {
    width: 352,
    height: 106,
  },
});

const ICON_SIZES = StyleSheet.create({
  S: {
    width: 30,
    height: 30,
  },
  M: {
    width: 36,
    height: 36,
  },
  L: {
    width: 42,
    height: 42,
  },
  XL: {
    width: 48,
    height: 48,
  },
});

const PICKER_ARROW_SIZES = StyleSheet.create({
  S: {
    width: 15,
    height: 36,
  },
  M: {
    width: 17,
    height: 42,
  },
  L: {
    width: 20,
    height: 48,
  },
  XL: {
    width: 21,
    height: 52,
  },
  XXL: {
    width: 25,
    height: 60,
  },
});

const FLAT_BUTTON_DOUBLE = StyleSheet.create({
  S: {
    width: 269,
    height: 48,
  },
  M: {
    width: 314,
    height: 56,
  },
  L: {
    width: 359,
    height: 64,
  },
  XL: {
    width: 404,
    height: 72,
  },
});

export const SIZES = StyleSheet.create({
  ICON_S: { ...ICON_SIZES.S },
  ICON_M: { ...ICON_SIZES.M },
  ICON_L: { ...ICON_SIZES.L },
  ICON_XL: { ...ICON_SIZES.XL },

  BTN_FLAT_S: { ...FLAT_BUTTON_SIZES.S },
  BTN_FLAT_M: { ...FLAT_BUTTON_SIZES.M },
  BTN_FLAT_L: { ...FLAT_BUTTON_SIZES.L },
  BTN_FLAT_XL: { ...FLAT_BUTTON_SIZES.XL },

  BTN_FLAT_DOUBLE_S: { ...FLAT_BUTTON_DOUBLE.S },
  BTN_FLAT_DOUBLE_M: { ...FLAT_BUTTON_DOUBLE.M },
  BTN_FLAT_DOUBLE_L: { ...FLAT_BUTTON_DOUBLE.L },
  BTN_FLAT_DOUBLE_XL: { ...FLAT_BUTTON_DOUBLE.XL },

  BTN_ROUND_S: { ...ROUND_BUTTON_SIZES.S },
  BTN_ROUND_M: { ...ROUND_BUTTON_SIZES.M },
  BTN_ROUND_L: { ...ROUND_BUTTON_SIZES.L },
  BTN_ROUND_XL: { ...ROUND_BUTTON_SIZES.XL },

  PICKER_ARROW_S: { ...PICKER_ARROW_SIZES.S },
  PICKER_ARROW_M: { ...PICKER_ARROW_SIZES.M },
  PICKER_ARROW_L: { ...PICKER_ARROW_SIZES.L },
  PICKER_ARROW_XL: { ...PICKER_ARROW_SIZES.XL },
  PICKER_ARROW_XXL: { ...PICKER_ARROW_SIZES.XXL },
});
