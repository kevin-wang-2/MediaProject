import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Text, Button } from "react-native";

import Screen from "../components/Screen";
import AppMeasurementElement from "../components/AppMeasurementElement";
import colors from "../config/colors";
import AppVisualizeElement from "../components/AppVisualizeElement";
import AppLineChart from "../components/AppLineChart";
import AppMeasurementPicker from "../components/AppMeasurementPicker";

import listings from "../api/listings";

let i = 0;

function MainScreen(props) {

  console.log(i++)

  const [legacyData, setData] = useState([]);
  const [imageUrl, setImageUrl] = useState(staticImageUrl);
  const [freshnessData, setFreshnessData] = useState([]);
  const [dataError, setError] = useState("");
  const [errorFreshnessData, setErrorFreshnessData] = useState("");

  const staticImageUrl = "www.yiyang-tech.com:8181/monitor/image"

  const initializeData = async () => {
    try {
      return setData(await listings.initializeData());
    } catch(e) {
      if(e.error) return setError(e.message);
      else return setError(e)
    }
  }

  const loadData = async () => {
    let newData = legacyData;
    if(newData.length > 9999) newData.shift();
    setImageUrl(staticImageUrl)
    try {
      let data = await listings.loadData()
      console.log(data);
      newData.push(data);
      return setData(newData);
    } catch(e) {
      if(e.error) return setError(e.message);
      else return setError("No Data");
    }
  }

  const loadFreshnessData = async () => {
    try {
      return setFreshnessData(await listings.loadFreshness());
    } catch(e) {
      if(e.error) return setErrorFreshnessData(e.message);
      else return setErrorFreshnessData("No Data");
    }
  }

  if(i === 0) {
    setInterval(async () => {
      await loadData();
      await loadFreshnessData();
    }, 1000);

    initializeData().then().catch((reason) => {
      throw reason;
    });
  }
  useEffect(() => {
    initializeData();
    loadData();
    loadFreshnessData();
  }, []);

  return (
    <Screen style={styles.container}>
      <AppMeasurementElement
        error={dataError}
        name="weight-kilogram"
        backgroundColor={colors.median}
        iconColor={colors.weight}
        text="箱内重量指数："
        value={legacyData.length !== 0 ? (legacyData[legacyData.length - 1].weight + " kg") : "No Data"}
        onRefresh={loadData}
      />
      <AppMeasurementPicker
        error={dataError}
        name="gas-cylinder"
        iconColor={colors.gas}
        text="气体浓度："
        placeholder="未选择"
        items={[
          {name: "酒精", value: legacyData.length !== 0 ? (legacyData[legacyData.length - 1].alcohol) : "No data"},
          {name: "氨类", value: legacyData.length !== 0 ? (legacyData[legacyData.length - 1].ammonia) : "No data"}]}
        onRefresh={loadData}
      />
      <AppVisualizeElement
        error={""}
        title="冰箱内景"
        visualizeComponent={
          <Image source={{ uri: imageUrl }} style={styles.image} />
        }
        taglineBackgroundColor={colors.tagline}
        iconName="refresh"
        iconColor="#00ffff"
        onPress={() => {setImageUrl(staticImageUrl)}}
      />
      <AppVisualizeElement
        error={errorFreshnessData}
        title="新鲜度变化曲线"
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
