import React from 'react';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FilterScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>FilterScreen</Text>
    </View>
  );
};

FilterScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => navigation.toggleDrawer()} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FilterScreen;
