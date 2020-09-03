import React from "react";
import { StyleSheet, View, Image } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";
import Icon from "./Icon";
import AppButtonTemplate from "../components/AppButtonTemplate";

function AppVisualizeElement({
  error,
  title,
  taglineBackgroundColor,
  visualizeComponent,
  style,
  iconName,
  iconColor,
  onPress,
}) {
  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.tagContainer,
          { backgroundColor: taglineBackgroundColor },
        ]}
      >
        {error ? (
          <AppText>Error!</AppText>
        ) : (
          <AppText style={styles.tag}>{title}</AppText>
        )}
        {iconName && (
          <AppButtonTemplate
            buttonComponent={
              <Icon
                style={{ marginLeft: 10 }}
                name={iconName}
                size={30}
                backgroundColor={iconColor}
                iconColor={colors.light}
              />
            }
            onPress={onPress}
          />
        )}
      </View>
      {visualizeComponent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: "100%",
    // resizeMode: "contain",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  imageContainer: {
    // could reset the size of the container to fit the image size from "Shu Mei Pai"
    width: "100%",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: colors.median,
    // padding: 10,
  },
  tag: {
    color: colors.white,
  },
  tagContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
    paddingBottom: 10,
  },
});

export default AppVisualizeElement;
