import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
    // android only style
    elevation: 8,
    // ios only style
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
});
