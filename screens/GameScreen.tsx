import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "./../components/game/NumberContainer";
import PrimaryButton from "./../components/ui/PrimaryButton";

interface props {
  userNumber: number;
  onGameOver: () => void;
}

let minBoundary = 1;
let maxBoundary = 100;

const generateRandomBetween = (min: number, max: number, exclude: number) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const initialGuess = generateRandomBetween(1, 100, 0);

const GameScreen = ({ userNumber, onGameOver }: props) => {
  const [curGuess, setCurGuess] = useState(initialGuess);
  useEffect(() => {
    if (curGuess === userNumber) {
      onGameOver();
    }
  }, [curGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && curGuess < userNumber) ||
      (direction === "greater" && curGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = curGuess;
    } else {
      minBoundary = curGuess + 1;
    }

    console.log(minBoundary, maxBoundary);

    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      curGuess
    );

    setCurGuess(newRandomNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{curGuess}</NumberContainer>
      <View>
        <Text>High or Lower ?</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("greater")}>
            +
          </PrimaryButton>
        </View>
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
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
    marginTop: 20,
  },
});
