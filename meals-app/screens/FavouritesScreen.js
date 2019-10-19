import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';

const FavouritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favouriteMeals);
  if (favMeals && favMeals.length) {
    return <MealList listData={favMeals} navigation={props.navigation} />;
  } else {
    return (
      <View style={styles.content}>
        <DefaultText>No favourite meals found. Start adding some!</DefaultText>
      </View>
    );
  }
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavouritesScreen;
