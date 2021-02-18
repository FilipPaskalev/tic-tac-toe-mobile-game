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
      <MainStack.Navigator initialRouteName={"HomeScreen"}>
        <MainStack.Screen name={"HomeScreen"} component={HomeScreen} />
        <MainStack.Screen name={"ProfileScreen"} component={ProfileScreen} />
        <MainStack.Screen name={"SettingsScreen"} component={SettingsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
