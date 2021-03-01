import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

/** Enumerations */
import { SCREE_NAMES } from "../constants/ScreenNames";

/** Screens */
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import FaqScreen from "../screens/FaqScreen";
import SinglePlayerScreen from "../screens/SinglePlayerScreen";
import GameScreen from "../screens/GameScreen";

const MainStack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={SCREE_NAMES.HOME}
        screenOptions={{
          headerShown: false,
        }}
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
          name={SCREE_NAMES.SINGLE_PLAYER}
          component={SinglePlayerScreen}
        />
        <MainStack.Screen name={SCREE_NAMES.GAME} component={GameScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
