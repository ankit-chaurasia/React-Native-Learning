import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealItem from './MealItem';

const MealList = ({ listData, navigation }) => {
  const favouriteMeals = useSelector((state) => state.meals.favouriteMeals);
  const renderMealItem = ({ item }) => {
    const { title, duration, affordibility, complexity, imageUrl, id } = item;
    const isFav = favouriteMeals.some((meal) => meal.id === id);
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
              mealTitle: title,
              isFav,
            },
          })
        }
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList data={listData} keyExtractor={({ id }) => id} renderItem={renderMealItem} style={{ width: '100%' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealList;
