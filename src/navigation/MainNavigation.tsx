import React from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
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

/** Custom components */
import CustomHeader from "../components/CustomHeader";

const MainStack = createStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: () => <CustomHeader />,
        }}
      >
        {/* prettier-ignore */}
        <MainStack.Screen 
          name={SCREEN_INFO.HOME.name} 
          component={HomeScreen} />
        <MainStack.Screen
          name={SCREEN_INFO.PROFILE.name}
          component={ProfileScreen}
        />
        <MainStack.Screen
          name={SCREEN_INFO.SETTINGS.name}
          component={SettingsScreen}
        />
        {/* prettier-ignore */}
        <MainStack.Screen 
          name={SCREEN_INFO.FAQ.name} 
          component={FaqScreen} />
        <MainStack.Screen
          name={SCREEN_INFO.ONE_PLAYER.name}
          component={OnePlayerScreen}
        />
        <MainStack.Screen
          name={SCREEN_INFO.TWO_PLAYERS.name}
          component={TwoPlayersScreen}
        />
        <MainStack.Screen
          name={SCREEN_INFO.MULTIPLAYER.name}
          component={MultiplayerScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
