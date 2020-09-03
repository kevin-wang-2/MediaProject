import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Text, Button } from "react-native";

import Screen from "../components/Screen";
import AppMeasurementElement from "../components/AppMeasurementElement";
import colors from "../config/colors";
import AppVisualizeElement from "../components/AppVisualizeElement";
import AppLineChart from "../components/AppLineChart";
import AppMeasurementPicker from "../components/AppMeasurementPicker";

import listingsApi from "../api/listings";

function timeMapper(time) {
  // unit of time is minute
  let days = Math.floor(time / 1440);
  let timeLeft1 = time - days * 1440;
  let hours = Math.floor(timeLeft1 / 60);
  let timeLeft2 = timeLeft1 - hours * 60;
  let minute = timeLeft2;
  return days + "D " + hours + "M " + minute + "M";
}

function MainScreen(props) {
  const imageRefreshing = () => loadImageUrl();
  setInterval(imageRefreshing, 10800000); // refresh the image every 3 hours

  const measurementRefreshing = () => {
    loadGases();
    loadFruits();
    loadWeight();
    loadTime();
    loadFreshnessData();
  };
  setInterval(measurementRefreshing, 60000); // refresh all the measurements every 1 minutes

  const [gases, setGases] = useState([]);
  const [fruits, setFruits] = useState([]);
  const [weight, setWeight] = useState([]);
  const [time, setTime] = useState([]); // seconds
  const [imageUrl, setImageUrl] = useState([]);
  const [freshnessData, setFreshnessData] = useState([]);

  const [errorGases, setErrorGases] = useState(false);
  const [errorFruits, setErrorFruits] = useState(false);
  const [errorWeight, setErrorWeight] = useState(false);
  const [errorTime, setErrorTime] = useState(false);
  const [errorImageUrl, setErrorImageUrl] = useState(false);
  const [errorFreshnessData, setErrorFreshnessData] = useState(false);

  const loadGases = async () => {
    const response = await listingsApi.getGases();
    if (!response.ok) return setErrorGases(true);
    setErrorGases(false);
    setGases(response.data);
  };
  const loadFruits = async () => {
    const response = await listingsApi.getFruits();
    if (!response.ok) return setErrorFruits(true);
    setErrorFruits(false);
    setFruits(response.data);
  };
  const loadWeight = async () => {
    const response = await listingsApi.getWeight();
    if (!response.ok) return setErrorWeight(true);
    setErrorWeight(false);
    setWeight(response.data);
  };
  const loadTime = async () => {
    const response = await listingsApi.getTime();
    if (!response.ok) return setErrorTime(true);
    setErrorTime(false);
    setTime(response.data);
  };
  const loadImageUrl = async () => {
    const response = await listingsApi.getImageUrl();
    if (!response.ok) return setErrorImageUrl(true);
    setErrorImageUrl(false);
    setImageUrl(response.data);
  };
  const loadFreshnessData = async () => {
    const response = await listingsApi.getFreshnessData();
    if (!response.ok) return setErrorFreshnessData(true);
    setErrorFreshnessData(false);
    setFreshnessData(response.data);
  };

  useEffect(() => {
    loadGases();
    loadFruits();
    loadWeight();
    loadTime();
    loadImageUrl();
    loadFreshnessData();
  }, []);

  return (
    <Screen style={styles.container}>
      <AppMeasurementElement
        error={errorWeight}
        name="weight-kilogram"
        backgroundColor={colors.median}
        iconColor={colors.weight}
        text="重量："
        value={weight[0] + " kg"}
        onRefresh={loadWeight}
      />
      <AppMeasurementPicker
        error={errorGases}
        name="gas-cylinder"
        iconColor={colors.gas}
        text="气体浓度："
        placeholder="未选择"
        items={gases}
        onRefresh={loadGases}
      />
      <AppMeasurementElement
        error={errorTime}
        name="camera-timer"
        backgroundColor={colors.median}
        iconColor={colors.time}
        text="存放时间："
        value={timeMapper(time[0])}
        onRefresh={loadTime}
      />
      <AppMeasurementPicker
        error={errorFruits}
        name="apps"
        iconColor={colors.category}
        text="种类："
        placeholder="未选择"
        items={fruits}
        onRefresh={loadFruits}
      />
      <AppVisualizeElement
        error={errorImageUrl}
        title="冰箱内景"
        visualizeComponent={
          <Image source={{ uri: imageUrl[0] }} style={styles.image} />
        }
        taglineBackgroundColor={colors.tagline}
        iconName="refresh"
        iconColor="#00ffff"
        onPress={imageRefreshing}
      />
      <AppVisualizeElement
        error={errorFreshnessData}
        title="新鲜度变化"
        visualizeComponent={<AppLineChart freshnessData={freshnessData} />}
        taglineBackgroundColor={colors.tagline}
        iconName="refresh"
        iconColor="#00ffff"
        onPress={loadFreshnessData}
      />
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

export default MainScreen;
