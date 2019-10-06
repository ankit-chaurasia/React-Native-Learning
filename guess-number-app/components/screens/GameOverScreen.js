import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const GameOverScreen = ({ guessRounds, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Text>Game is Over!</Text>
      <Text>Number of Rounds: {guessRounds}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title='NEW GAME' onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
