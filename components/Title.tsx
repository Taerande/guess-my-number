import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    padding: 12,
    fontSize: 24,
    color: "#ddb52f",
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
  },
});
