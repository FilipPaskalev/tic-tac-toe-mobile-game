import "react-native-gesture-handler";
import React from "react";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/** Screens */
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import FaqScreen from "./src/screens/FaqScreen";
import OnePlayerScreen from "./src/screens/OnePlayerScreen";
import TwoPlayersScreen from "./src/screens/TwoPlayersScreen";
import MultiplayerScreen from "./src/screens/MultiplayerScreen";
import ScoreBoardScreen from "./src/screens/ScoreBoardScreen";

/** Custom components */
import CustomHeader from "./src/components/CustomHeader";

/** Enumerations & constants */
import { I18N_KEYS } from "./src/constants/i18nKeys";
import { SCREEN_NAMES } from "./src/constants/ScreenNames";

/**TODO:
 * 1. create more languages and add them to the dictionary
 * 2. separate loading the languages in separate file
 */
// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: require("./src/translation/en.json"),
  // bg: require("./src/translation/bg.json"),
};

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

const MainStack = createStackNavigator();

/**TODO:
 * 1. if (data don't exist){create storage}
 * 2. load data from existing storage
 * 3. if (internet connection exist) {load app updates}
 */
function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={SCREEN_NAMES.home}
        screenOptions={{
          headerTransparent: true,
        }}
      >
        <MainStack.Screen
          name={SCREEN_NAMES.home}
          component={HomeScreen}
          options={{
            title: i18n.t(I18N_KEYS.SCREENS_TITLES.home),
            headerTitle: () => (
              <CustomHeader title={i18n.t(I18N_KEYS.SCREENS_TITLES.home)} />
            ),
          }}
        />
        <MainStack.Screen
          name={SCREEN_NAMES.settings}
          component={SettingsScreen}
          options={{
            title: i18n.t(I18N_KEYS.SCREENS_TITLES.settings),
            headerTitle: () => (
              <CustomHeader title={i18n.t(I18N_KEYS.SCREENS_TITLES.settings)} />
            ),
          }}
        />
        <MainStack.Screen
          name={SCREEN_NAMES.profile}
          component={ProfileScreen}
          options={{
            title: i18n.t(I18N_KEYS.SCREENS_TITLES.profile),
            headerTitle: () => (
              <CustomHeader title={i18n.t(I18N_KEYS.SCREENS_TITLES.profile)} />
            ),
          }}
        />
        {/* <MainStack.Screen
          name={"FaqScreen"}
          component={FaqScreen}
          options={{
            title: "HELP / FAQ",
            headerTitle: () => <CustomHeader title={"HELP / FAQ"} />,
          }}
        /> */}
        {/* <MainStack.Screen
          name={"OnePlayerScreen"}
          component={OnePlayerScreen}
          options={{
            title: "Player vs AI",
            headerTitle: () => <CustomHeader title={"Player vs AI"} />,
          }}
        /> */}
        {/* <MainStack.Screen
          name={"TwoPlayersScreen"}
          component={TwoPlayersScreen}
          options={{
            title: "2 Players",
            headerTitle: () => <CustomHeader title={"2 Players"} />,
          }}
        /> */}
        {/* <MainStack.Screen
          name={"MultiplayerScreen"}
          component={MultiplayerScreen}
          options={{
            title: "Play online",
            headerTitle: () => <CustomHeader title={"Play online"} />,
          }}
        /> */}
        {/* <MainStack.Screen
          name={"ScoreBoardScreen"}
          component={ScoreBoardScreen}
          options={{
            title: "Score",
            headerTitle: () => <CustomHeader title={"Score"} />,
          }}
        /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
