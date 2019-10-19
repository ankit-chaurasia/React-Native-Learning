import React from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter((meal) => meal.categoryIds.includes(catId));

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');
  const { title } = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: title,
  };
};

export default CategoryMealsScreen;
