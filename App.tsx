import "react-native-gesture-handler";
import React, { FunctionComponent } from "react";
import * as Localization from "expo-localization";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import i18n from "i18n-js";

/** Reducers */
import appSettingsReducer from "./src/store/reducers/appSettings";

/** Navigation */
import Navigation from "./src/navigation/Navigation";

/** Constants */
import { I18N_DICTIONARY } from "./src/constants/I18nDictionary";

const rootReducer = combineReducers({
  appSettings: appSettingsReducer,
});

const store = createStore(rootReducer);

// Set the locale
i18n.locale = Localization.locale;

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

// Set the supported languages
i18n.translations = I18N_DICTIONARY;

type Props = {};

const App: FunctionComponent<Props> = (props) => {
  console.log("LOAD ===> App.tsx");

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
