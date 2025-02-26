import { View, Text, StyleSheet, Dimensions } from "react-native";

import React from "react";
import Colors from "../../constants/colors";

interface props {
  children: React.ReactNode;
}
const NumberContainer = ({ children }: props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: deviceWidth < 450 ? 12 : 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
