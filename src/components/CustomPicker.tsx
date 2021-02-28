import React, { FunctionComponent, useState } from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import i18n from "i18n-js";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";

/** Components */
import Letterpress from "./Letterpress";

/** Enumerations */
import { PICKER_TYPES } from "../constants/PickerTypes";
import { SIZES } from "../constants/sizes";
import { I18N_KEYS } from "../constants/I18nKeys";
import { MARGIN } from "../constants/styles/Margin";

type Props = {
  style?: object;
  type: PICKER_TYPES;
};

function getLabel(type: PICKER_TYPES) {
  switch (type) {
    case PICKER_TYPES.LANGUAGE: {
      return i18n.t(I18N_KEYS.language);
    }
    case PICKER_TYPES.THEME: {
      return i18n.t(I18N_KEYS.theme);
    }
    case PICKER_TYPES.DIFFICULTY_LEVEL: {
      return i18n.t(I18N_KEYS.difficultyLevel);
    }
    default: {
      return "";
    }
  }
}

function getData(pickerType: PICKER_TYPES) {
  let data = [""];
  switch (pickerType) {
    case PICKER_TYPES.LANGUAGE: {
      data = [i18n.t(I18N_KEYS.english), i18n.t(I18N_KEYS.bulgarian)];
      break;
    }
    case PICKER_TYPES.THEME: {
      data = [i18n.t(I18N_KEYS.green), i18n.t(I18N_KEYS.pink)];
      break;
    }
    case PICKER_TYPES.DIFFICULTY_LEVEL: {
      data = [
        i18n.t(I18N_KEYS.easy),
        i18n.t(I18N_KEYS.normal),
        i18n.t(I18N_KEYS.hard),
      ];
      break;
    }
    default: {
      break;
    }
  }
  return data;
}

const CustomPicker: FunctionComponent<Props> = (props) => {
  const data = getData(props.type);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(data[index]);

  return (
    <View style={[styles.container, props.style]}>
      <Letterpress>{getLabel(props.type)}</Letterpress>
      <View style={styles.pickerContainer}>
        <TouchableOpacity
          onPress={() => {
            index + 1 > data.length - 1
              ? (setIndex(0), setValue(data[0]))
              : (setIndex(index + 1), setValue(data[index + 1]));
          }}
        >
          <Image source={GRAPHICS.BUTTONS.PICKER_LEFT} style={styles.arrow} />
        </TouchableOpacity>
        <ImageBackground source={GRAPHICS.FIELDS.PICKER_LONG} style={styles.bg}>
          <Letterpress>{value}</Letterpress>
        </ImageBackground>
        <TouchableOpacity
          onPress={() => {
            index + 1 > data.length - 1
              ? (setIndex(0), setValue(data[0]))
              : (setIndex(index + 1), setValue(data[index + 1]));
          }}
        >
          <Image source={GRAPHICS.BUTTONS.PICKER_RIGHT} style={styles.arrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: MARGIN.S,
  },
  bg: {
    ...SIZES.BTN_FLAT_M,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: MARGIN.L,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    ...SIZES.PICKER_ARROW_XXL,
  },
});

export default CustomPicker;
