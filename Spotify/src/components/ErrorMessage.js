/** @format */

import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ErrorMessage = () => {
  return (
    <View style={styles.viewWarning}>
      <Text style={styles.textWarning}>error....</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewWarning: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  textWarning: {
    fontSize: 18,
    fontWeight: "900",
    color: "white",
    textAlign: "center"
  }
});

export default ErrorMessage;
