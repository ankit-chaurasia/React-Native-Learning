import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVOURITE, SET_FILTERS } from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};

const mealsReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favouriteMeals.findIndex((meal) => meal.id === action.mealId);
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favouriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favouriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => {
          return meal.id == action.mealId;
        });
        return { ...state, favouriteMeals: state.favouriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      //   isGlutenFree,
      // isVegan,
      // isVegetarian,
      // isLactoseFree,
      const { isGlutenFree, isLactoseFree, isVegan, isVegetrian } = action.filters;
      const filteredMeals = state.meals.filter((meal) => {
        if (isGlutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (isVegan && !meal.isVegan) {
          return false;
        }
        if (isVegetrian && !meal.isVegetrian) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals };
    default:
      return state;
  }
};

export default mealsReducers;
