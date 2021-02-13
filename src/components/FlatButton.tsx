import React from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";

/** Hooks */
import { useNavigation } from "@react-navigation/native";

/** Components */
import LetterPress from "./LetterPress";

interface FlatButtonProps {
  label: string;
}

function FlatButton({ label }: FlatButtonProps) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <LetterPress context={label} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {},
  label: {},
});

export default FlatButton;
