import React from 'react';
import { View, StyleSheet, Button, Image, Text } from 'react-native';
import BodyText from '../BodyText';
import TitleText from '../TitleText';
import Colors from '../../constants/colors';
import MainButton from '../MainButton';

const GameOverScreen = ({ guessRounds, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/success.png')} style={styles.image} resizeMode='cover' />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{guessRounds}</Text> rounds to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: '#000',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 30,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 15,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOverScreen;
