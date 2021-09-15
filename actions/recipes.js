//
//
//import { ADD_RECIPE, FETCH_RECIPES, SET_RECIPES } from '../constants/actionTypes';
//
////action creator? -> it's hard to remember the propertirs that need to be passed in the action object
//
//const recipesReducer = (recipes = [], action) => {
//  switch (action.type) {
//    case ADD_RECIPE:
//      return recipes.concat({ name: action.name });
//
//    case SET_RECIPES:
//      return action.recipes;
//  }
//
//  return recipes;
//};
//
//export default recipesReducer;


//import { ADD_RECIPE, SET_RECIPES } from '../constants/actionTypes';

//action creator? -> it's hard to remember the propertirs that need to be passed in the action object

const recipesReducer = (recipes = [], action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return recipes.concat({ name: action.name });

    case SET_RECIPES:
      return action.recipes;
  }

  return recipes;
};

export default recipesReducer;