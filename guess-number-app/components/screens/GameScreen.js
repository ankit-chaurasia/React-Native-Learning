import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../NumberContainer';
import Card from '../Card';
import DefaultStyles from '../../constants/DefaultStyles';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = ({ userChoice, style, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice));
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    // Runs after every render cycle
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if ((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)) {
      Alert.alert(`Don't lie!`, 'You know that this is wrong...', [
        {
          text: 'Sorry!',
          style: 'cancel',
        },
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextGuess = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setRounds((currRounds) => currRounds + 1);
    setCurrentGuess(nextGuess);
  };

  return (
    <View style={{ ...styles.screen, ...style }}>
      <Text style={DefaultStyles.titleText}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title='LOWER' onPress={nextGuessHandler.bind(this, 'lower')} />
        <Button title='GREATER' onPress={nextGuessHandler.bind(this, 'greater')} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
    width: 300,
    maxWidth: '80%',
  },
});

export default GameScreen;
