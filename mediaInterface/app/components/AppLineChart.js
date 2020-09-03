import React from "react";
import { LineChart } from "react-native-chart-kit";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

const date = new Date();
const today = date.getMonth() + "/" + date.getDate();
date.setDate(date.getDate() - 1);
const yesterday1 = date.getMonth() + "/" + date.getDate();
date.setDate(date.getDate() - 1);
const yesterday2 = date.getMonth() + "/" + date.getDate();
date.setDate(date.getDate() - 1);
const yesterday3 = date.getMonth() + "/" + date.getDate();
date.setDate(date.getDate() - 1);
const yesterday4 = date.getMonth() + "/" + date.getDate();
date.setDate(date.getDate() - 1);
const yesterday5 = date.getMonth() + "/" + date.getDate();

const xLabels = [
  yesterday5,
  yesterday4,
  yesterday3,
  yesterday2,
  yesterday1,
  today,
];

function AppLineChart({ freshnessData }) {
  const data = {
    labels: xLabels,
    datasets: [
      {
        data: freshnessData,
      },
    ],
  };
  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={355}
        height={220}
        // yAxisLabel="$"
        // yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          // backgroundColor: colors.dark,
          backgroundGradientFrom: colors.dark,
          backgroundGradientTo: colors.median,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: colors.tagline,
          },
        }}
        bezier
        style={{
          marginBottom: 8,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: "white",
    borderRadius: 16,
  },
});

export default AppLineChart;
