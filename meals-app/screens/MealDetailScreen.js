import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const { title } = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{title}</Text>
      <Text>MealDetailScreen</Text>
      <Button title='Go Back to Categories' onPress={() => props.navigation.popToTop()} />
    </View>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');
  const { title } = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
