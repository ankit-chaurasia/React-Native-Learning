import React from 'react';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FavouritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favouriteMeals);

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Your Favourites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => navigation.toggleDrawer()} />
      </HeaderButtons>
    ),
  };
};

export default FavouritesScreen;
