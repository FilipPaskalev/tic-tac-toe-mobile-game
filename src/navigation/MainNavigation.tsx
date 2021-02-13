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
import { ScreenNames } from "../enums/ScreenNames";

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
        <Stack.Screen name={ScreenNames.PROFILE} component={ProfileScreen} />
        <Stack.Screen name={ScreenNames.SETTINGS} component={SettingsScreen} />
        <Stack.Screen name={ScreenNames.FAQ} component={FaqScreen} />
        <Stack.Screen
          name={ScreenNames.ONE_PLAYER}
          component={OnePlayerScreen}
        />
        <Stack.Screen
          name={ScreenNames.TWO_PLAYERS}
          component={TwoPlayersScreen}
        />
        <Stack.Screen
          name={ScreenNames.MULTIPLAYER}
          component={MultiplayerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
