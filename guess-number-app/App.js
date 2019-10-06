import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './components/screens/StartGameScreen';
import GameScreen from './components/screens/GameScreen';
import GameOverScreen from './components/screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNameGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds) => setGuessRounds(numOfRounds);

  const renderScreen = () => {
    if (userNumber && guessRounds <= 0) {
      return <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
    } else if (guessRounds > 0) {
      return <GameOverScreen guessRounds={guessRounds} userNumber={userNumber} onRestart={configureNameGameHandler} />;
    } else {
      return <StartGameScreen onStartGame={startGameHandler} />;
    }
  };

  return (
    <View style={styles.screen}>
      <Header title='Guess A Number' />
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
