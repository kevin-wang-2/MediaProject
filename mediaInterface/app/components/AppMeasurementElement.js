import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";
import Icon from "./Icon";

function AppMeasurementElement({
  error,
  onRefresh,
  name,
  backgroundColor,
  iconColor,
  text,
  value,
  style,
}) {
  return (
    <View style={[styles.outsideContainer, style]}>
      <View style={[styles.container, { backgroundColor: backgroundColor }]}>
        <View style={styles.tag}>
          <Icon
            name={name}
            backgroundColor={colors.median}
            iconColor={iconColor}
            size={40}
          />
          <AppText style={styles.text}>{text}</AppText>
        </View>
        <View style={styles.tag}>
          {error ? (
            <AppText>Error!</AppText>
          ) : (
            <AppText style={styles.value}>{value}</AppText>
          )}
          <TouchableOpacity onPress={onRefresh} style={styles.refresh}>
            <MaterialCommunityIcons
              name="refresh"
              size={25}
              color={iconColor}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  outsideContainer: {
    width: "50%",
  },
  refresh: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
  tag: {
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 18,
    color: colors.light,
  },
  value: {
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: colors.light,
  },
});

export default AppMeasurementElement;
