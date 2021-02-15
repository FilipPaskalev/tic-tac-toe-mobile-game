import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
        <MainStack.Screen
          name={SCREEN_INFO.HOME.name}
          component={SCREEN_INFO.HOME.component}
          options={{ title: SCREEN_INFO.HOME.title }}
        />
        <MainStack.Screen
          name={SCREEN_INFO.SETTINGS.name}
          component={SCREEN_INFO.SETTINGS.component}
          options={{ title: SCREEN_INFO.SETTINGS.title }}
        />
        <MainStack.Screen
          name={SCREEN_INFO.PROFILE.name}
          component={SCREEN_INFO.PROFILE.component}
          options={{ title: SCREEN_INFO.PROFILE.title }}
        />
        <MainStack.Screen
          name={SCREEN_INFO.FAQ.name}
          component={SCREEN_INFO.FAQ.component}
          options={{ title: SCREEN_INFO.FAQ.title }}
        />
        <MainStack.Screen
          name={SCREEN_INFO.ONE_PLAYER.name}
          component={SCREEN_INFO.ONE_PLAYER.component}
          options={{ title: SCREEN_INFO.ONE_PLAYER.title }}
        />
        <MainStack.Screen
          name={SCREEN_INFO.TWO_PLAYERS.name}
          component={SCREEN_INFO.TWO_PLAYERS.component}
          options={{ title: SCREEN_INFO.TWO_PLAYERS.title }}
        />
        <MainStack.Screen
          name={SCREEN_INFO.MULTIPLAYER.name}
          component={SCREEN_INFO.MULTIPLAYER.component}
          options={{ title: SCREEN_INFO.MULTIPLAYER.title }}
        />
        <MainStack.Screen
          name={SCREEN_INFO.SCORE_BOARD.name}
          component={SCREEN_INFO.SCORE_BOARD.component}
          options={{ title: SCREEN_INFO.SCORE_BOARD.title }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
