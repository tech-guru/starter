// combining multiple reducers is a pervasive pattern, we can use combineReducers => a special function provided by Redux to combine multiple reducers
import { combineReducers } from 'redux';
import recipesReducer from './recipes';
import ingredientsReducer from './ingredients';

const rootReducer = (state, action) => {
  return Object.assign({}, state, {
    recipes: recipesReducer(state.recipes, action),
    ingredients: ingredientsReducer(state.ingredients, action)
  });
};

export default rootReducer;
