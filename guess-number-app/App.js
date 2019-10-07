import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './components/screens/StartGameScreen';
import GameScreen from './components/screens/GameScreen';
import GameOverScreen from './components/screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={(err) => console.log(err)} />;
  }

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
    <SafeAreaView style={styles.screen}>
      <Header title='Guess A Number' />
      {renderScreen()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
