import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = (props) => {
  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onSelect={() =>
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: item.id,
            },
          })
        }
      />
    );
  };

  return <FlatList keyExtractor={(item) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
