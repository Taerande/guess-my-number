import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Title from "../components/ui/Title";

const generateRandomBetween = (min: number, max: number, exclude: number) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

interface props {
  userNumber: number;
}

const GameScreen = ({ userNumber }: props) => {
  const initialGuess = generateRandomBetween(1, 100, 0);
  const [curGuess, setCurGuess] = useState(userNumber);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <Text></Text>
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
