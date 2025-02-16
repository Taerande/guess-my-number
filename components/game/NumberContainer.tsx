import { View, Text, StyleSheet } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent500,
    fontSize: 22,
  },
});
