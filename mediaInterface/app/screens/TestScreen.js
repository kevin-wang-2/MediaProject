import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Button } from "react-native";

import Screen from "../components/Screen";
import AppMeasurementElement from "../components/AppMeasurementElement";
import colors from "../config/colors";
import AppVisualizeElement from "../components/AppVisualizeElement";
import AppLineChart from "../components/AppLineChart";
import AppMeasurementPicker from "../components/AppMeasurementPicker";

import listingsApi from "../api/listings";

function TestScreen(props) {
  const [listings, setListings] = useState([]);
  const [messages, setMessages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [errorListings, setErrorListings] = useState(false);
  const [errorMessages, setErrorMessages] = useState(false);
  const [errorCategories, setErrorCategories] = useState(false);

  useEffect(() => {
    loadListings;
    loadMessages;
    loadCategories;
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    if (!response.ok) return setErrorListings(true);
    setErrorListings(false);
    setListings(response.data);
  };
  const loadMessages = async () => {
    const response = await listingsApi.getMessages();
    if (!response.ok) return setErrorMessages(true);
    setErrorMessages(false);
    setMessages(response.data);
  };
  const loadCategories = async () => {
    const response = await listingsApi.getCategories();
    if (!response.ok) return setErrorCategories(true);
    setErrorCategories(false);
    setCategories(response.data);
  };

  console.log("refreshed");
  console.log(listings);
  console.log(messages);
  console.log(categories);

  return (
    <Screen>
      {errorListings && <Text> couldn't retrieve the listings</Text>}
      <Button title="retry" onPress={loadListings} />
      {errorMessages && <Text> couldn't retrieve the messages</Text>}
      <Button title="retry" onPress={loadMessages} />
      {errorCategories && <Text> couldn't retrieve the catogories</Text>}
      <Button title="retry" onPress={loadCategories} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.dark,
    flexWrap: "wrap",
  },
  image: {
    width: "100%",
    // resizeMode: "contain",
    height: 200,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default TestScreen;
