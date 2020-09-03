import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import Icon from "./Icon";
import AppPicker from "./AppPicker";

function AppMeasurementPicker({
  error,
  name,
  iconColor,
  placeholder,
  text,
  items,
  onRefresh,
}) {
  const [category, setCategory] = useState();
  return (
    <AppPicker
      error={error}
      style={styles.container}
      iconName={name}
      iconColor={iconColor}
      items={items}
      selectedItem={category}
      text={text}
      placeholder={placeholder}
      onSelectItem={(item) => setCategory(item)}
      onRefresh={onRefresh}
    ></AppPicker>
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
  value: {
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.light,
  },
});

export default AppMeasurementPicker;
