import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Title from "./../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>High or Lower ?</Text>
      </View>
      <View>
        {/* Opponent's Guess */}
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
