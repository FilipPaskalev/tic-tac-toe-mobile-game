import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

/** Screens */
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { SCREE_NAMES } from "../constants/ScreenNames";

const MainStack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={SCREE_NAMES.SETTINGS}
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
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
