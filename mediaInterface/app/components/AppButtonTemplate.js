import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import colors from "../config/colors";

function AppButtonTemplate({ buttonComponent, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>{buttonComponent}</TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

export default AppButtonTemplate;
