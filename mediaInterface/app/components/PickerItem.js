import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import Icon from "./Icon";
import colors from "../config/colors";

function PickerItem({ item, onPress }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {item.icon && (
        <Icon name={item.icon} size={75} backgroundColor={item.iconColor} />
      )}
      <AppText style={styles.text}>{item.name + " " + item.value}</AppText>
    </TouchableOpacity>
  );
}

export default PickerItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  text: {
    fontSize: 17,
    paddingVertical: 5,
    textAlign: "center",
    color: colors.light,
  },
});
