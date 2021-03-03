import { BUTTON_ACTIONS } from "./ButtonActions";

export const GRAPHICS = {
  BUTTONS: {
    ROUND: require("../../assets/buttons/b3.png"),
    FLAT: require("../../assets/buttons/b2.png"),
    FLAT_DOUBLE: require("../../assets/buttons/b6.png"),
    EMPTY: require("../../assets/icons/empty.png"),
    PICKER_LEFT: require("../../assets/buttons/b4.png"),
    PICKER_RIGHT: require("../../assets/buttons/b5.png"),
  },
  ICONS: {
    SETTINGS: require("../../assets/icons/settings.png"),
    AVATAR_BOY: require("../../assets/icons/avatar-boy.png"),
    SHARE: require("../../assets/icons/share.png"),
    LIKE_US: require("../../assets/icons/like-us.png"),
    QUESTION: require("../../assets/icons/question-mark-draw.png"),
    STORE: require("../../assets/icons/store.png"),
    BACK_SCREEN_ARROW: require("../../assets/icons/back-screen-arrow.png"),
    EMPTY: require("../../assets/icons/empty.png"),
    MUSIC_ON: require("../../assets/icons/music-on.png"),
    MUSIC_OFF: require("../../assets/icons/music-off.png"),
    SOUNDS_OFF: require("../../assets/icons/sounds-off.png"),
    SOUNDS_ON: require("../../assets/icons/sounds-on.png"),
  },
  FIELDS: {
    PICKER_SHORT: require("../../assets/fields/f2.png"),
    PICKER_LONG: require("../../assets/fields/f1.png"),
    TYPING_LIGHT: require("../../assets/fields/f3.png"),
    TYPING_DARK: require("../../assets/fields/f4.png"),
  },
};

export const getRoundButtonIcon = (action?: BUTTON_ACTIONS) => {
  if (action === undefined) {
    return GRAPHICS.ICONS.EMPTY;
  }

  switch (action) {
    case BUTTON_ACTIONS.NAVIGATE_TO_HOME_SCREEN: {
      return GRAPHICS.ICONS.BACK_SCREEN_ARROW;
    }
    case BUTTON_ACTIONS.NAVIGATE_TO_PROFILE_SCREEN: {
      return GRAPHICS.ICONS.AVATAR_BOY;
    }
    case BUTTON_ACTIONS.NAVIGATE_TO_SETTINGS_SCREEN: {
      return GRAPHICS.ICONS.SETTINGS;
    }
    case BUTTON_ACTIONS.NAVIGATE_TO_FAQ_SCREEN: {
      return GRAPHICS.ICONS.QUESTION;
    }
    case BUTTON_ACTIONS.OPEN_GOOGLE_APP_STORE: {
      return GRAPHICS.ICONS.STORE;
    }
    case BUTTON_ACTIONS.NAVIGATE_TO_PREVIOUS_SCREEN: {
      return GRAPHICS.ICONS.BACK_SCREEN_ARROW;
    }
    case BUTTON_ACTIONS.RATE_APP: {
      return GRAPHICS.ICONS.LIKE_US;
    }
    case BUTTON_ACTIONS.TOGGLE_MUSIC: {
      return GRAPHICS.ICONS.MUSIC_ON;
    }
    case BUTTON_ACTIONS.MUSIC_ON: {
      return GRAPHICS.ICONS.MUSIC_ON;
    }
    case BUTTON_ACTIONS.MUSIC_OFF: {
      return GRAPHICS.ICONS.MUSIC_OFF;
    }
    case BUTTON_ACTIONS.SOUNDS_ON: {
      return GRAPHICS.ICONS.SOUNDS_ON;
    }
    case BUTTON_ACTIONS.SOUNDS_OFF: {
      return GRAPHICS.ICONS.SOUNDS_OFF;
    }
    case BUTTON_ACTIONS.TOGGLE_SOUND: {
      return GRAPHICS.ICONS.SOUNDS_ON;
    }
    case BUTTON_ACTIONS.OPEN_SHARE_MODAL: {
      return GRAPHICS.ICONS.SHARE;
    }
    default: {
      return GRAPHICS.ICONS.EMPTY;
    }
  }
};

export const getRoundButtonBackground = () => {
  return GRAPHICS.BUTTONS.ROUND;
};

export const getFlatButtonBackground = () => {
  return GRAPHICS.BUTTONS.FLAT;
};
