import { Platform } from "react-native";

import colors from "../config/colors";

export default {
  colors,
  text: {
    fontSize: 18,
    color: colors.dark,
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        color: "Roboto",
      },
    }),
  },
};
