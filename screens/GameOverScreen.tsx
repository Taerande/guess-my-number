import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Title from "./../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "./../components/ui/PrimaryButton";

interface GameOverScreenProps {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
}

const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}: GameOverScreenProps) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={() => onStartNewGame()}>
        Start New Game
      </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    paddingBottom: 200,
  },
  imageContainer: {
    width: deviceWidth < 380 ? 120 : 240,
    height: deviceWidth < 380 ? 120 : 240,
    borderRadius: deviceWidth < 380 ? 60 : 120,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary600,
  },
});
