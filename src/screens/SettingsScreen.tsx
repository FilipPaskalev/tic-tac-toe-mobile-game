import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Switch, View } from "react-native";

/**Hooks */
import { useHeaderHeight } from "@react-navigation/stack";

/** Constants */
import { GRAPHICS } from "../constants/Graphics";
import { COLORS } from "../constants/Colors";

/** Custom components */
import SquareButton from "../components/SquareButton";
import LetterPress from "../components/LetterPress";
import Footer from "../components/Footer";
import { BUTTON_SIZES } from "../constants/ButtonSizes";
import CustomSwitch from "../components/CustomSwitch";

function SettingsScreen() {
  const headerHeight = useHeaderHeight();
  const [isMusicEnabled, setIsMusicEnabled] = useState(true);
  const [isSoundEnabled, setIsSoundEnable] = useState(true);
  const [isVibrationEnabled, setIsVibrationEnabled] = useState(true);
  const [isWelcomeScreenEnabled, setIsWelcomeScreenEnabled] = useState(true);
  const [isAdsEnabled, setIsAdsEnabled] = useState(true);
  const toggleMusic = () =>
    setIsMusicEnabled((previousState) => !previousState);
  const toggleSound = () => setIsSoundEnable((previousState) => !previousState);
  const toggleVibration = () =>
    setIsVibrationEnabled((previousState) => !previousState);
  const toggleWelcomeScreen = () =>
    setIsWelcomeScreenEnabled((previousState) => !previousState);
  const toggleAds = () => setIsAdsEnabled((previousState) => !previousState);

  return (
    <View style={[styles.screen, { paddingTop: headerHeight }]}>
      <StatusBar style="auto" />
      <View style={styles.switchComponent}>
        <LetterPress content={"Music"} />
        <SquareButton
          graphic={GRAPHICS.ICONS.information}
          iconStyles={styles.infoIcon}
          containerStyles={styles.iconContainer}
        />
        <View style={{ flexGrow: 1 }} />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isMusicEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleMusic}
          value={isMusicEnabled}
        />
      </View>
      <View style={styles.switchComponent}>
        <LetterPress content={"Sound"} />
        <SquareButton
          graphic={GRAPHICS.ICONS.information}
          iconStyles={styles.infoIcon}
          containerStyles={styles.iconContainer}
        />
        <View style={{ flexGrow: 1 }} />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isSoundEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSound}
          value={isSoundEnabled}
        />
      </View>
      <View style={styles.switchComponent}>
        <LetterPress content={"Vibration"} />
        <SquareButton
          graphic={GRAPHICS.ICONS.information}
          iconStyles={styles.infoIcon}
          containerStyles={styles.iconContainer}
        />
        <View style={{ flexGrow: 1 }} />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isVibrationEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleVibration}
          value={isVibrationEnabled}
        />
      </View>
      <View style={styles.switchComponent}>
        <LetterPress content={"Welcome screen"} />
        <SquareButton
          graphic={GRAPHICS.ICONS.information}
          iconStyles={styles.infoIcon}
          containerStyles={styles.iconContainer}
        />
        <View style={{ flexGrow: 1 }} />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isWelcomeScreenEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleWelcomeScreen}
          value={isWelcomeScreenEnabled}
        />
      </View>
      <View style={styles.switchComponent}>
        <LetterPress content={"Active Ads"} />
        <SquareButton
          graphic={GRAPHICS.ICONS.information}
          iconStyles={styles.infoIcon}
          containerStyles={styles.iconContainer}
        />
        <View style={{ flexGrow: 1 }} />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isAdsEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleAds}
          value={isAdsEnabled}
        />
      </View>
      <CustomSwitch label={"welcome screen"} enabled={false} target={"Music"} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.BACKGROUND.APP.primary,
  },
  switchComponent: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
    height: 48,
    width: "100%",
  },
  infoIcon: {
    width: BUTTON_SIZES.SQUARE_BUTTON.SMALL.width,
    height: BUTTON_SIZES.SQUARE_BUTTON.SMALL.height,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    height: BUTTON_SIZES.SQUARE_BUTTON.LARGE.height,
    width: BUTTON_SIZES.SQUARE_BUTTON.LARGE.width,
    // borderWidth: 1,
  },
});

export default SettingsScreen;
