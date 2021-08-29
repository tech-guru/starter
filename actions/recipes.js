

import { ADD_RECIPE, FETCH_RECIPES, SET_RECIPES } from '../constants/actionTypes';

//action creator? -> it's hard to remember the propertirs that need to be passed in the action object
export const addRecipe = (name) => ({
  type: ADD_RECIPE, name
});

export const fetchRecipes = () => ({
  type: FETCH_RECIPES
});

export const setRecipes = (recipes) => ({
  type: SET_RECIPES, recipes
});
