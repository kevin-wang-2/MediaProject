import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import Icon from "./Icon";

function AppPicker({
  error,
  onRefresh,
  style,
  iconName,
  iconColor,
  items,
  numberOfColumns = 1,
  onSelectItem,
  placeholder,
  PickerItemComponent = PickerItem,
  selectedItem,
  text,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.outsideContainer}>
        <View style={[style, { backgroundColor: defaultStyles.colors.median }]}>
          {iconName && (
            <View style={styles.tag}>
              <Icon
                name={iconName}
                backgroundColor={defaultStyles.colors.median}
                iconColor={iconColor}
                size={40}
              />
              <AppText style={styles.text2}>{text}</AppText>
            </View>
          )}
          <View style={styles.container3}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.container2}
            >
              <>
                {error && <AppText>Error!</AppText>}
                {selectedItem ? (
                  <AppText style={styles.value}>
                    {selectedItem.name + " " + selectedItem.value}
                  </AppText>
                ) : (
                  <AppText style={styles.value}> {placeholder} </AppText>
                )}
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={25}
                  color="black"
                />
              </>
            </TouchableOpacity>
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

      <Modal visible={modalVisible} animationType="slide">
        <Screen style={styles.modal}>
          <View style={styles.button}>
            <Button title="close" onPress={() => setModalVisible(false)} />
          </View>
          <FlatList
            data={items}
            keyExtractor={(item) => item.name}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

export default AppPicker;

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  modal: {
    backgroundColor: defaultStyles.colors.dark,
  },
  outsideContainer: {
    width: "50%",
  },
  tag: {
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  refresh: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: defaultStyles.colors.light,
  },
  text2: {
    paddingHorizontal: 10,
    fontSize: 18,
    color: defaultStyles.colors.light,
  },
});
