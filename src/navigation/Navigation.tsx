import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

/** Enumerations */
import { SCREE_NAMES } from "../constants/ScreenNames";

/** Screens */
import {
  HomeScreen,
  ProfileScreen,
  SettingsScreen,
  FaqScreen,
  SinglePlayerSettingsScreen,
  SinglePlayerGameScreen,
} from "../screens";

const MainStack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={SCREE_NAMES.HOME}
        // hide navigation header in every screen
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name={SCREE_NAMES.HOME} component={HomeScreen} />
        <MainStack.Screen
          name={SCREE_NAMES.PROFILE}
          component={ProfileScreen}
        />
        <MainStack.Screen
          name={SCREE_NAMES.SETTINGS}
          component={SettingsScreen}
        />
        <MainStack.Screen name={SCREE_NAMES.FAQ} component={FaqScreen} />
        <MainStack.Screen
          name={SCREE_NAMES.SINGLE_PLAYERS_SETTINGS}
          component={SinglePlayerSettingsScreen}
        />
        <MainStack.Screen
          name={SCREE_NAMES.SINGLE_PLAYERS_GAME}
          component={SinglePlayerGameScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
