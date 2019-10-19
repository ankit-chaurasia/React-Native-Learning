import React, { useEffect, useCallback } from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';
import { toggleFavourite } from '../store/actions/meals';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam('mealId');
  const isCurrentMealFavourite = useSelector((state) => state.meals.favouriteMeals.some((meal) => meal.id === mealId));
  const { duration, complexity, affordibility, imageUrl, ingredients, steps } = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavouriteHandler });
  }, [toggleFavouriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: isCurrentMealFavourite });
  }, [isCurrentMealFavourite]);

  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{duration}m</DefaultText>
        <DefaultText>{complexity.toUpperCase()}</DefaultText>
        <DefaultText>{affordibility.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const title = navigation.getParam('mealTitle');
  const toggleFavourite = navigation.getParam('toggleFav');
  const isFav = navigation.getParam('isFav');
  return {
    headerTitle: title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Favourite' iconName={isFav ? 'ios-star' : 'ios-star-outline'} onPress={toggleFavourite} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
