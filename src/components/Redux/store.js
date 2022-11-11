


// import { applyMiddleware, compose, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import RootReducer from './Reducer';
// import rootReducer from './Reducer';

// export const Store = createStore(RootReducer)

// export function configureStore(initialState) {
//  const middleware = [thunk];
 
//  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
 
//  return store;
// }

import {rootReducer} from './Reducer/index'
import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
export const Store = createStore(rootReducer,applyMiddleware(thunk))

