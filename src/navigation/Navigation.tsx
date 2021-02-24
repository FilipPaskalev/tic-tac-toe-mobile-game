import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

/** Screens */
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";

const MainStack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name={"Home"} component={HomeScreen} />
        <MainStack.Screen name={"Profile"} component={ProfileScreen} />
        <MainStack.Screen name={"Settings"} component={SettingsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
