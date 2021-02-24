import "react-native-gesture-handler";
import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import * as Localization from "expo-localization";
import i18n from "i18n-js";

/** Reducers */
import appSettingsReducer from "./src/store/reducers/appSettings";

/** Navigation */
import Navigation from "./src/navigation/Navigation";

/** Constants */
import { SUPPORTED_LANGUAGES } from "./src/constants/Languages";

const rootReducer = combineReducers({
  appSettings: appSettingsReducer,
});

const store = createStore(rootReducer);

// Set the locale
i18n.locale = Localization.locale;

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

// Set the supported languages
i18n.translations = SUPPORTED_LANGUAGES;

type Props = {};

const App: FunctionComponent<Props> = (props) => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
