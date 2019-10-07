import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Alert, ScrollView, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NumberContainer from '../NumberContainer';
import Card from '../Card';
import DefaultStyles from '../../constants/DefaultStyles';
import MainButton from '../MainButton';
import BodyText from '../BodyText';

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
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get('window').width);
      setAvailableDeviceHeight(Dimensions.get('window').height);
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  useEffect(() => {
    // Runs after every render cycle
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
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
      currentLow.current = currentGuess + 1;
    }
    const nextGuess = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    // setRounds((currRounds) => currRounds + 1);
    setPastGuesses((currPastGuesses) => [nextGuess, ...currPastGuesses]);
    setCurrentGuess(nextGuess);
  };

  const renderListItem = (listLength, { index, item }) => {
    return (
      <View style={styles.listItem}>
        <BodyText>#{listLength - index}</BodyText>
        <BodyText>{item}</BodyText>
      </View>
    );
  };

  const renderLayout = () => {
    if (availableDeviceHeight < 500) {
      return (
        <View style={{ ...styles.screen, ...style }}>
          <Text style={DefaultStyles.titleText}>Opponent's Guess</Text>
          <View style={styles.controls}>
            <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name='md-remove' size={24} color={'#fff'} />
            </MainButton>
            <NumberContainer>{currentGuess}</NumberContainer>
            <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name='md-add' size={24} color={'#fff'} />
            </MainButton>
          </View>
          <View style={availableDeviceWidth < 350 ? styles.listContainerBig : styles.listContainer}>
            <FlatList
              keyExtractor={(item) => item.toString()}
              data={pastGuesses}
              renderItem={renderListItem.bind(null, pastGuesses.length)}
              contentContainerStyle={styles.list}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={{ ...styles.screen, ...style }}>
          <Text style={DefaultStyles.titleText}>Opponent's Guess</Text>
          <NumberContainer>{currentGuess}</NumberContainer>
          <Card style={styles.buttonContainer}>
            <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name='md-remove' size={24} color={'#fff'} />
            </MainButton>
            <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name='md-add' size={24} color={'#fff'} />
            </MainButton>
          </Card>
          <View style={availableDeviceWidth < 350 ? styles.listContainerBig : styles.listContainer}>
            {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
        </ScrollView> */}
            <FlatList
              keyExtractor={(item) => item.toString()}
              data={pastGuesses}
              renderItem={renderListItem.bind(null, pastGuesses.length)}
              contentContainerStyle={styles.list}
            />
          </View>
        </View>
      );
    }
  };

  return renderLayout();
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
    margin: Dimensions.get('window').height > 600 ? 20 : 5,
    width: 400,
    maxWidth: '90%',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
  },
  listContainer: {
    flex: 1,
    width: '60%',
  },
  listContainerBig: {
    flex: 1,
    width: '80%',
  },
  list: {
    flexGrow: 1,
    // alignItems: 'center',
    justifyContent: 'flex-end',
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default GameScreen;
