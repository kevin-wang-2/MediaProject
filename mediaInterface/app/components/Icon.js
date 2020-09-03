import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  name,
  size = 40,
  backgroundColor = colors.primary,
  iconColor = colors.white,
  style,
}) {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
        },
        style,
      ]}
    >
      <MaterialCommunityIcons
        name={name}
        color={iconColor}
        size={(size * 3) / 4}
      />
    </View>
  );
}

export default Icon;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
