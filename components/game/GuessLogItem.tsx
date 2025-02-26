import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

interface Props {
  roundNumber: number;
  guess: number;
}

const GuessLogItem = ({ roundNumber, guess }: Props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>Round: {roundNumber}</Text>
      <Text style={styles.itemText}>Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderBlockColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    marginVertical: 10,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
