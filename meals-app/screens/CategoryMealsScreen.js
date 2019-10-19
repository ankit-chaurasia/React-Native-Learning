import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter((meal) => meal.categoryIds.includes(catId));
  if (displayedMeals && displayedMeals.length) {
    return <MealList listData={displayedMeals} navigation={navigation} />;
  } else {
    return (
      <View style={styles.content}>
        <DefaultText>No Meals found, may be check your filters.</DefaultText>
      </View>
    );
  }
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');
  const { title } = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: title,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
