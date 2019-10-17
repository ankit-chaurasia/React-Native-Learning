import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(catId));

  return <MealList listData={displayedMeals} navigation={navigation}/>;
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');
  const { title } = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: title,
  };
};

export default CategoryMealsScreen;
