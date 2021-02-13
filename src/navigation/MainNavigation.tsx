import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/** Screens */
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import FaqScreen from "../screens/FaqScreen";
import OnePlayerScreen from "../screens/OnePlayerScreen";
import TwoPlayersScreen from "../screens/TwoPlayersScreen";
import MultiplayerScreen from "../screens/MultiplayerScreen";

/** Constants */
import { SCREEN_INFO } from "../constants/ScreensInfo";

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREEN_INFO.HOME.NAME} component={HomeScreen} />
        <Stack.Screen
          name={SCREEN_INFO.PROFILE.NAME}
          component={ProfileScreen}
        />
        <Stack.Screen
          name={SCREEN_INFO.SETTINGS.NAME}
          component={SettingsScreen}
        />
        <Stack.Screen name={SCREEN_INFO.FAQ.NAME} component={FaqScreen} />
        <Stack.Screen
          name={SCREEN_INFO.ONE_PLAYER.NAME}
          component={OnePlayerScreen}
        />
        <Stack.Screen
          name={SCREEN_INFO.TWO_PLAYERS.NAME}
          component={TwoPlayersScreen}
        />
        <Stack.Screen
          name={SCREEN_INFO.MULTIPLAYER.NAME}
          component={MultiplayerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
