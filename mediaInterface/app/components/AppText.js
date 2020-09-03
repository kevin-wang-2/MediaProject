import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

function AppText({ children, style, ...OtherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...OtherProps}>
      {children}
    </Text>
  );
}

export default AppText;
