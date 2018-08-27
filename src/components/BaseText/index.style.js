import { StyleSheet, Platform } from 'react-native';

const fontFamily = Platform.OS === "ios" ? "System Font" : "Roboto";

export default StyleSheet.create({
  text: {
    fontFamily,
  },
});
