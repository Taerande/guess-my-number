import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

interface Props {
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ children, ...rest }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    marginTop: 30,
    padding: 12,
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    maxWidth: "80%",
  },
});
