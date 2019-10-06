import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './components/screens/StartGameScreen';
import GameScreen from './components/screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
  return (
    <View style={styles.screen}>
      <Header title='Guess A Number' />
      {userNumber ? <GameScreen userChoice={userNumber} /> : <StartGameScreen onStartGame={startGameHandler} />}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
