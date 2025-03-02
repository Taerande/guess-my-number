import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "./../components/game/NumberContainer";
import PrimaryButton from "./../components/ui/PrimaryButton";
import Card from "./../components/ui/Card";
import Colors from "../constants/colors";
import GuessLogItem from "./../components/game/GuessLogItem";

interface props {
  userNumber: number;
  onGameOver: () => void;
  updateRound: React.Dispatch<React.SetStateAction<number>>;
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

const GameScreen = ({ userNumber, onGameOver, updateRound }: props) => {
  const [curGuess, setCurGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (curGuess === userNumber) {
      updateRound(guessRounds.length);
      onGameOver();
    }
  }, [curGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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

    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      curGuess
    );

    setCurGuess(newRandomNumber);
    setGuessRounds([newRandomNumber, ...guessRounds]);
  };

  let content = (
    <>
      <NumberContainer>{curGuess}</NumberContainer>
      <Card>
        <Text style={styles.captionText}>High or Lower ?</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > height) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.button}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{curGuess}</NumberContainer>
          <View style={styles.button}>
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.guessLog}>
        <FlatList
          data={guessRounds}
          keyExtractor={(item) => item.toString()}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRounds.length - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    columnGap: 10,
    marginTop: 20,
  },
  button: {
    width: "40%",
    fontSize: 24,
    color: Colors.accent500,
  },
  captionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
  guessLog: {
    marginTop: 20,
    paddingHorizontal: 30,
    height: "50%",
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
});
