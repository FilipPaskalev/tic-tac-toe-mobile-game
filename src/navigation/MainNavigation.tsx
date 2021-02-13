import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";

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

/** Components */
import CustomHeader from "../components/CustomHeader";

const MainStack = createStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name={SCREEN_INFO.HOME.NAME}
          component={HomeScreen}
          options={{
            headerTransparent: true,
            headerTitle: () => <CustomHeader title={SCREEN_INFO.HOME.TITLE} />,
          }}
        />
        <MainStack.Screen
          name={SCREEN_INFO.PROFILE.NAME}
          component={ProfileScreen}
          options={{
            headerTitle: () => (
              <CustomHeader title={SCREEN_INFO.PROFILE.TITLE} />
            ),
          }}
        />
        <MainStack.Screen
          name={SCREEN_INFO.SETTINGS.NAME}
          component={SettingsScreen}
          options={{
            headerTitle: () => (
              <CustomHeader title={SCREEN_INFO.SETTINGS.TITLE} />
            ),
          }}
        />
        <MainStack.Screen
          name={SCREEN_INFO.FAQ.NAME}
          component={FaqScreen}
          options={{
            headerTitle: () => <CustomHeader title={SCREEN_INFO.FAQ.TITLE} />,
          }}
        />
        <MainStack.Screen
          name={SCREEN_INFO.ONE_PLAYER.NAME}
          component={OnePlayerScreen}
          options={{
            headerTitle: () => (
              <CustomHeader title={SCREEN_INFO.ONE_PLAYER.TITLE} />
            ),
          }}
        />
        <MainStack.Screen
          name={SCREEN_INFO.TWO_PLAYERS.NAME}
          component={TwoPlayersScreen}
          options={{
            headerTitle: () => (
              <CustomHeader title={SCREEN_INFO.TWO_PLAYERS.TITLE} />
            ),
          }}
        />
        <MainStack.Screen
          name={SCREEN_INFO.MULTIPLAYER.NAME}
          component={MultiplayerScreen}
          options={{
            headerTitle: () => (
              <CustomHeader title={SCREEN_INFO.MULTIPLAYER.TITLE} />
            ),
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
