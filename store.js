import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';
import logMiddleware from './middleware/log';
import apiMiddleware from './middleware/api';

const initialState = {
  recipes: [{ name: 'Omelette' }],
  ingredients: [{ recipe: 'Omelette', name: 'Egg', quantity: 2 }]
};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logMiddleware, apiMiddleware)
);

window.store = store;

export default store;
