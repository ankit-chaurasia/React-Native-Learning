import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.includes(catId));

  const renderMealItem = ({ item }) => {
    const { title, duration, affordibility, complexity, imageUrl, id } = item;
    return (
      <MealItem
        title={title}
        duration={duration}
        affordibility={affordibility}
        complexity={complexity}
        imageUrl={imageUrl}
        onSelectMeal={() =>
          navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: id,
            },
          })
        }
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} keyExtractor={({ id }) => id} renderItem={renderMealItem} style={{ width: '100%' }} />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam('categoryId');
  const { title } = CATEGORIES.find((cat) => cat.id === catId);
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

export default CategoryMealsScreen;
