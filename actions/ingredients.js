
//action creator? -> it's hard to remember the propertirs that need to be passed in the action object
export const addIngredient = (recipe, name, quantity) => ({
  type: 'ADD_INGREDIENT', recipe, name, quantity
});
