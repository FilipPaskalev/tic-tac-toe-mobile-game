/** Screens */
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import FaqScreen from "../screens/FaqScreen";
import OnePlayerScreen from "../screens/OnePlayerScreen";
import TwoPlayersScreen from "../screens/TwoPlayersScreen";
import MultiplayerScreen from "../screens/MultiplayerScreen";
import ScoreBoardScreen from "../screens/ScoreBoardScreen";

export const SCREEN_INFO = {
  HOME: { title: "Tic Tac Toe", name: "HomeScreen", component: HomeScreen },
  PROFILE: {
    title: "My Profile",
    name: "ProfileScreen",
    component: ProfileScreen,
  },
  SETTINGS: {
    title: "Options",
    name: "SettingsScreen",
    component: SettingsScreen,
  },
  FAQ: { title: "HELP / FAQ", name: "FaqScreen", component: FaqScreen },
  ONE_PLAYER: {
    title: "Player vs AI",
    name: "OnePlayerScreen",
    component: OnePlayerScreen,
  },
  TWO_PLAYERS: {
    title: "2 Players",
    name: "TwoPlayersScreen",
    component: TwoPlayersScreen,
  },
  MULTIPLAYER: {
    title: "Multiplayer",
    name: "MultiplayerScreen",
    component: MultiplayerScreen,
  },
  SCORE_BOARD: {
    title: "Score",
    name: "ScoreBoardScreen",
    component: ScoreBoardScreen,
  },
};
