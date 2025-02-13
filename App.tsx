import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState<null | number>();

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
  };

  let screen = <StartGameScreen onConfirmNumber={startGameHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={["#ddb52f", "#460625"]} style={styles.rootScreen}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
