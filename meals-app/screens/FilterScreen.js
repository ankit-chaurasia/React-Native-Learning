import React, { useState } from 'react';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FilterScreen = (props) => {
  const [isGlutenFree, setisGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetrian, setIsVegetrian] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch label='Gluten-free' state={isGlutenFree} onChange={setisGlutenFree} />
      <FilterSwitch label='Lactose-free' state={isLactoseFree} onChange={setIsLactoseFree} />
      <FilterSwitch label='Vegan' state={isVegan} onChange={setIsVegan} />
      <FilterSwitch label='Vegetrian' state={isVegetrian} onChange={setIsVegetrian} />
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
    alignItems: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
});

export default FilterScreen;
